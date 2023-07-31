import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "rc-pagination";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { Icon } from "../../../components/Icon/Icon";
import { selectIsLoading, selectNotieces } from "../../../redux/selectors";
import { fetchNotices } from "../../../redux/noticesSlice/operations";

import { ModalNotice } from "../../Modals/ModalNotice/ModalNotice";

import { CommonItemList } from "../CommonItemList/CommonItemList";
import { scrollToTop } from "../../../utils";

import { List, Button1, WrapperPagination } from "./NoticesPetCard.styled";

import "../../../assets/index.less";

import ModalApproveDelete from "../../Modals/ModalApproveDelete/ModalApproveDelete";
import ModalAttention from "../../Modals/ModalAttention/ModalAttention";
import { Loader } from "../../Loader/Loader";

const NoticesCategoriesList = () => {
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [currentCategory, setCurrentCategory] = useState("sale");

  const [showModal, setShowModal] = useState(false);
  const [showModalAttention, setShowModalAttention] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const [oneCard, setOneCard] = useState(null);

  const location = useLocation();

  const search = new URLSearchParams(location.search).get("search");
  const IsLoading = useSelector(selectIsLoading);
  const resp = useSelector(selectNotieces);
  const { notices, length } = resp;

  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(
      fetchNotices({
        page: currentPage,
        category: currentCategory,
        search: search,
      })
    );
    // if (!fetching) return;

    setFetching(false);
  }, [currentCategory, currentPage, dispatch, search]);

  const handleClickCards = (item) => {
    setShowModal(true);
    setOneCard(item);
  };

  const onChange = (page) => {
    setCurrentPage(page);
    setFetching(true);
    scrollToTop();
  };

  useEffect(() => {
    if (location.pathname === "/notices/sell") {
      setCurrentCategory("sale");
      setFetching(true);
    } else if (location.pathname === "/notices/lost-found") {
      setCurrentCategory("lost/found");
      setFetching(true);
    } else if (location.pathname === "/notices/for-free") {
      setCurrentCategory("in good hands");
      setFetching(true);
    }
    setCurrentPage(1);
  }, [location.pathname]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);
  console.clear();
  return (
    <>
      {IsLoading ? (
        <Loader />
      ) : (
        <List>
          {notices &&
            notices.map((item) => (
              <CommonItemList key={item._id} item={item}>
                <Button1 onClick={() => handleClickCards(item)}>
                  <span>Learn more</span>
                  <Icon iconName={"icon-pawprint"} fill={"#54ADFF"} />
                </Button1>
              </CommonItemList>
            ))}
          <WrapperPagination>
            {length <= 10 || (
              <Pagination
                onChange={onChange}
                current={currentPage}
                showLessItems
                total={length}
                showTitle={false}
              />
            )}
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
