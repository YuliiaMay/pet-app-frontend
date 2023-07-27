import { ResponsiveContainer } from "../../../assets/styles/ResponsiveContainer";
import { List } from "./NewsList.styled";
import { fetchNews } from "../../../redux/newsSlice/operations";
import { NewsItem } from "../NewsItem/NewsItems";
import { Loader } from "../../Loader/Loader";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function NewsList() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchNews());
        setNewsData(response.payload);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [dispatch]);

  const dataNews = newsData.slice(0, 20);

  return (
    <ResponsiveContainer>
      <List>{isLoading ? <Loader /> : <NewsItem dataNews={dataNews} />}</List>
    </ResponsiveContainer>
  );
}
