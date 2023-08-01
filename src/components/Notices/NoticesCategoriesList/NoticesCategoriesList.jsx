import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "rc-pagination";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { Icon } from "../../../components/Icon/Icon";

import {
  selectError,
  selectIsLoading,
  selectNotieces,
  selectNotiecesAll,
} from "../../../redux/selectors";

import {
  deleteNotice,
  fetchNotices,
  fetchNoticesAll,
} from "../../../redux/noticesSlice/operations";

import { ModalNotice } from "../../Modals/ModalNotice/ModalNotice";

import { CommonItemList } from "../CommonItemList/CommonItemList";
import { scrollToTop } from "../../../utils";

import { List, Button1, WrapperPagination } from "./NoticesPetCard.styled";

import "../../../assets/index.less";

import ModalApproveDelete from "../../Modals/ModalApproveDelete/ModalApproveDelete";
import ModalAttention from "../../Modals/ModalAttention/ModalAttention";
import { Loader } from "../../Loader/Loader";
import { selectUser } from "../../../redux/authSlice/selectors";

const NoticesCategoriesList = () => {
  const [fetching, setFetching] = useState(false);
  const [fetchingAll, setFetchingAll] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [currentCategory, setCurrentCategory] = useState("sell");

  const [showModal, setShowModal] = useState(false);
  const [showModalAttention, setShowModalAttention] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const [oneCard, setOneCard] = useState(null);

  const [renderCards, setRenderCards] = useState(null);

  const location = useLocation();

  const search = new URLSearchParams(location.search).get("search");

  const IsLoading = useSelector(selectIsLoading);

  const all = useSelector(selectNotiecesAll);

  const { notices, length } = useSelector(selectNotieces);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const [idCards, setIdCards] = useState(null);

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

    dispatch(fetchNoticesAll({ owner: user._id }));
    setRenderCards(all);
    setRenderCards((prevRenderCards) =>
      prevRenderCards.filter((item) => item._id !== idCards)
    );
    setFetchingAll(false);
  }, [all, dispatch, fetchingAll, idCards, renderCards, user._id]);

  const handleClickCards = (item) => {
    setShowModal(true);
    setOneCard(item);
  };

  const onChange = (page) => {
    scrollToTop();
    setCurrentPage(page);
  };

  useMemo(() => {
    if (location.pathname === "/notices/sell") {
      setCurrentCategory("sell");
      setRenderCards(notices);
      setFetching(true);
    } else if (location.pathname === "/notices/lost-found") {
      setCurrentCategory("lost/found");
      setRenderCards(notices);
      setFetching(true);
    } else if (location.pathname === "/notices/for-free") {
      setCurrentCategory("in good hands");
      setRenderCards(notices);
    } else if (location.pathname === "/notices/own") {
      setFetchingAll(true);
    } else if (location.pathname === "/notices/favorite") {
      console.log("favorite");
    }
  }, [location.pathname, notices]);

  useMemo(() => {
    if (
      location.pathname === "/notices/sell" ||
      location.pathname === "/notices/lost-found" ||
      location.pathname === "/notices/for-free"
    ) {
      setCurrentPage(1);
      setFetching(true);
      setFetchingAll(false);
    } else if (location.pathname === "/notices/own") {
      setFetchingAll(true);
      setCurrentPage(1);
    } else if (location.pathname === "/notices/favorite") {
      console.log("!!!favorite!!!");
    }
  }, [location.pathname]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const handleClickDelete = (id) => {
    dispatch(deleteNotice(id));
    setIdCards(id);
    setFetchingAll(true);
  };
  return (
    <>
      {IsLoading ? (
        <Loader />
      ) : (
        <List>
          {renderCards &&
            renderCards.map((item) => (
              <CommonItemList
                key={item._id}
                item={item}
                handleClickDelete={handleClickDelete}
              >
                <Button1 onClick={() => handleClickCards(item)}>
                  <span>Learn more</span>
                  <Icon iconName={"icon-pawprint"} fill={"#54ADFF"} />
                </Button1>
              </CommonItemList>
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

      <ModalNotice active={showModal} setShow={setShowModal} card={oneCard} />

      <ModalApproveDelete
        active={showModalDelete}
        setShow={setShowModalDelete}
      />
      <ModalAttention
        active={showModalAttention}
        setShow={setShowModalAttention}
      />
    </>
  );
};

NoticesCategoriesList.propTypes = {
  props: PropTypes.object,
};
export default NoticesCategoriesList;
