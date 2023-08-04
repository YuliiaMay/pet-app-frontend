import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "rc-pagination";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import {
  selectFavorite,
  selectIsLoading,
  selectNotieces,
  selectNotiecesAll,
} from "../../../redux/selectors";

import {
  deleteNotice,
  fetchFavorite,
  fetchFavoriteDelete,
  fetchNotices,
  fetchNoticesAll,
} from "../../../redux/noticesSlice/operations";

import { CommonItemList } from "../CommonItemList/CommonItemList";
import { scrollToTop } from "../../../utils";

import ModalApproveDelete from "../../Modals/ModalApproveDelete/ModalApproveDelete";

import { Loader } from "../../Loader/Loader";
import { selectUser } from "../../../redux/authSlice/selectors";

import "../../../assets/index.less";
import { List, WrapperPagination } from "./NoticesPetCard.styled";

const NoticesCategoriesList = () => {
  const dispatch = useDispatch();

  const [fetchingAll, setFetchingAll] = useState(false);
  const [fetchingFavorite, setFetchingFavorite] = useState(false);
  const [idCards, setIdCards] = useState(null);
  const [idCardsFavorite, setIdCardsFavorite] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("sell");

  const [renderCards, setRenderCards] = useState(null);

  const location = useLocation();

  const search = new URLSearchParams(location.search).get("search");

  const all = useSelector(selectNotiecesAll);
  const favNotices = useSelector(selectFavorite);
  const { notices, length } = useSelector(selectNotieces);
  const user = useSelector(selectUser);
  const IsLoading = useSelector(selectIsLoading);
  const [showModalDelete, setShowModalDelete] = useState(false);

  useEffect(() => {
    dispatch(fetchFavorite());
  }, []);

  useEffect(() => {
    if (!fetchingFavorite) return;

    dispatch(fetchFavorite());

    setRenderCards(favNotices);
    setRenderCards((favNotices) =>
      favNotices.filter((item) => item._id !== idCards)
    );
    setFetchingFavorite(false);
  }, [dispatch, favNotices, fetchingFavorite]);

  useEffect(() => {
    dispatch(
      fetchNotices({
        page: currentPage,
        category: currentCategory,
        search: search,
      })
    );
    if (!idCards) return;
    setRenderCards((prevRenderCards) =>
      prevRenderCards.filter((item) => item._id !== idCards)
    );
  }, [currentCategory, currentPage, dispatch, idCards, search]);

  useEffect(() => {
    if (!fetchingAll) return;
    if (!user._id) return;
    dispatch(fetchNoticesAll({ owner: user._id }));
    setRenderCards(all);

    setFetchingAll(false);
  }, [all, dispatch, fetchingAll, idCards, renderCards, user._id]);

  useEffect(() => {
    if (location.pathname === "/notices/sell") {
      setCurrentCategory("sell");
      setRenderCards(notices);
    } else if (location.pathname === "/notices/lost-found") {
      setCurrentCategory("lost/found");
      setRenderCards(notices);
    } else if (location.pathname === "/notices/for-free") {
      setCurrentCategory("in good hands");
      setRenderCards(notices);
    } else if (location.pathname === "/notices/own") {
      setFetchingAll(true);
    } else if (location.pathname === "/notices/favorite") {
      setFetchingFavorite(true);
      if (!idCardsFavorite) return;

      setFetchingFavorite(false);
      setIdCardsFavorite(false);
    }
  }, [idCardsFavorite, location.pathname, notices]);

  useMemo(() => {
    if (
      location.pathname === "/notices/sell" ||
      location.pathname === "/notices/lost-found" ||
      location.pathname === "/notices/for-free"
    ) {
      setCurrentPage(1);

      setFetchingAll(false);
    } else if (location.pathname === "/notices/own") {
      setFetchingAll(true);
      setCurrentPage(1);
    } else if (location.pathname === "/notices/favorite") {
      setFetchingAll(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const onChange = (page) => {
    scrollToTop();
    setCurrentPage(page);
  };

  const [approve, setApprove] = useState(null);

  const handleClickDelete = (id) => {
    setShowModalDelete(true);

    setApprove(id);
  };
  const handleConfirmDelete = (id) => {
    dispatch(deleteNotice(id));

    setIdCards(id);
    setFetchingAll(true);
    setShowModalDelete(false);
  };

  const handleClickDeleteFavorite = (id) => {
    setFetchingFavorite(true);
    dispatch(fetchFavoriteDelete(id));

    if (location.pathname === "/notices/favorite") {
      setRenderCards((favNotices) =>
        favNotices.filter((item) => item._id !== id)
      );
    }

    setFetchingFavorite(false);
  };

  return (
    <>
      {IsLoading && favNotices ? (
        <Loader />
      ) : (
        <List>
          {renderCards &&
            renderCards.map((item) => (
              <CommonItemList
                key={item._id}
                item={item}
                handleClickDelete={handleClickDelete}
                handleClickDeleteFavorite={handleClickDeleteFavorite}
              ></CommonItemList>
            ))}
          <WrapperPagination>
            <Pagination
              onChange={onChange}
              current={currentPage}
              showLessItems
              total={length}
              showTitle={false}
            />
          </WrapperPagination>
        </List>
      )}

      <ModalApproveDelete
        active={showModalDelete}
        setShow={setShowModalDelete}
        isId={approve}
        handleConfirmDelete={handleConfirmDelete}
      />
    </>
  );
};

NoticesCategoriesList.propTypes = {
  props: PropTypes.object,
};
export default NoticesCategoriesList;
