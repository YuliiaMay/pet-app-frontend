import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAllNews } from "../../../redux/newsSlice/selectors";

import Pagination from "rc-pagination";

import { ResponsiveContainer } from "../../../assets/styles/ResponsiveContainer";
import { fetchNews } from "../../../redux/newsSlice/operations";
import { NewsItem } from "../NewsItem/NewsItem";
import { Loader } from "../../Loader/Loader";

import { List, WrapperPagination } from "./NewsList.styled";

import "../../../assets/index.less";
import { scrollToTop } from "../../../utils";
import { useLocation } from "react-router-dom";

export default function NewsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const news = useSelector(selectAllNews);

  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(fetchNews({ page: currentPage, search: query }));

    setIsLoading(false);
  }, [currentPage, dispatch, query]);

  const onChange = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  return (
    <ResponsiveContainer>
      <List>{isLoading ? <Loader /> : <NewsItem dataNews={news} />}</List>

      <WrapperPagination>
        {news.length < 6 || (
          <Pagination
            onChange={onChange}
            current={currentPage}
            showLessItems
            total={300}
            showTitle={false}
          />
        )}
      </WrapperPagination>
    </ResponsiveContainer>
  );
}
