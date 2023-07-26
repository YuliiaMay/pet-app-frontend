import { ResponsiveContainer } from "../../../assets/styles/ResponsiveContainer";
import { List } from "./NewsList.styled";
import { fetchNews } from "../../../redux/newsSlice/operations";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { NewsItem } from "../NewsItem/NewsItems";

export default function NewsList() {
  const [newsData, setNewsData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchNews());
        setNewsData(response.payload);
      } catch (error) {
        console.log(error.message);
      }
      setFetching(false);
    };

    if (fetching) {
      fetchData();
    }

    return () => {
      setFetching(false);
    };
  }, [dispatch, fetching]);

  const dataNews = newsData.slice(0, 20);

  return (
    <ResponsiveContainer>
      <List>
        <NewsItem dataNews={dataNews} />
      </List>
    </ResponsiveContainer>
  );
}
