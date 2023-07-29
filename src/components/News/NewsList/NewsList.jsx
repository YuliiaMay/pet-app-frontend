import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Pagination from "rc-pagination";

import { ResponsiveContainer } from "../../../assets/styles/ResponsiveContainer";
import { fetchNews } from "../../../redux/newsSlice/operations";
import { NewsItem } from "../NewsItem/NewsItems";
import { Loader } from "../../Loader/Loader";

import { List, WrapperPagination } from "./NewsList.styled";

import "../../../assets/index.less";
import { scrollToTop } from "../../../utils";

export default function NewsList() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchNews({ page: currentPage }));
        setNewsData(response.payload);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [currentPage, dispatch]);

  const onChange = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <ResponsiveContainer>
      <List>{isLoading ? <Loader /> : <NewsItem dataNews={newsData} />}</List>

      <WrapperPagination>
        <Pagination
          onChange={onChange}
          current={currentPage}
          showLessItems
          total={300}
          showTitle={false}
        />
      </WrapperPagination>
    </ResponsiveContainer>
  );
}
