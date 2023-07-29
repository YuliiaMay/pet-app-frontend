import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "rc-pagination";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { Icon } from "../../../components/Icon/Icon";
import { selectNotieces } from "../../../redux/selectors";
import { fetchNotices } from "../../../redux/noticesSlice/operations";

import { ModalNotice } from "../../Modals/ModalNotice/ModalNotice";

import { CommonItemList } from "../CommonItemList/CommonItemList";
import { formatYears, scrollToTop } from "../../../utils";

import {
  List,
  Info,
  Div,
  Img,
  Div1,
  PP,
  Div2,
  Button,
  Ul,
  Div3,
  P1,
  Button1,
  WrapperPagination,
} from "./NoticesPetCard.styled";

import "../../../assets/index.less";


import ModalApproveDelete from "../../Modals/ModalApproveDelete/ModalApproveDelete";
import ModalAttention from "../../Modals/ModalAttention/ModalAttention";


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

  const resp = useSelector(selectNotieces);
  const { notices, lenght } = resp;
  console.log("notices", resp);
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


  // const handleClickDelete = () => {
  //   setShowModalDelete(true);
  // };

  // const handleOpenAttention = () => {
  //   setShowModalAttention(true);
  // };

  const formattingOverview = (text) => {
    let newFormat = text;
    if (newFormat.length > 15) {
      newFormat = text.slice(0, 21) + "...";
    }
    return newFormat;
  };

  const formattingOverviewCity = (text) => {
    let newFormat = text;
    if (newFormat.length > 6) {
      newFormat = text.slice(0, 4) + "...";
    }
    return newFormat;
  };

  const formattingOverviewYear = (text) => {
    let newFormat = text;
    if (newFormat.length > 6) {
      newFormat = text.slice(0, 4) + "...";
    }
    return newFormat;
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

  return (
    <>
      <List>

        {notices &&
          notices.map((item) => (
            <Info key={item._id}>
              <Div>
                <Img src={item.imgUrl} alt="pet" loading="lazy"></Img>
                <Div1>
                  <PP>{item.category}</PP>
                  <Div2>
                    <Button aria-label="add to favorites">
                      <Icon
                        iconName={"icon-heart"}
                        width={"24px"}
                        height={"24px"}
                        stroke={"#54ADFF"}
                      />
                    </Button>
                  </Div2>
                </Div1>
                <Ul>
                  <CommonItemList iconName={"icon-location"}>
                    {formattingOverviewCity(item.place)}
                  </CommonItemList>
                  <CommonItemList iconName={"icon-clock"}>
                    {formattingOverviewYear(
                      formatYears(item.birthday) + " year"
                    )}
                  </CommonItemList>
                  <CommonItemList
                    iconName={
                      item.sex === "female" ? "icon-female" : "icon-male"
                    }
                  >
                    {item.sex}
                  </CommonItemList>
                </Ul>
              </Div>
              <Div3>
                <P1>{formattingOverview(item.title)}</P1>
                <Button1 onClick={() => handleClickCards(item)}>
                  <span>Learn more</span>
                  <Icon
                    iconName={"icon-pawprint"}
                    width={"24px"}
                    height={"24px"}
                    stroke={"#54ADFF"}
                    fill={"#54ADFF"}
                  />
                </Button1>
              </Div3>
            </Info>
          ))}

        {/* {visibleCards.map((item) => (
          <Info key={item._id}>
            <Div>
              <Img src={item.imgUrl} alt="pet" loading="lazy"></Img>
              <Div1>
                <PP>{item.category}</PP>
                <Div2>
                  <Button
                    aria-label="add to favorites"
                    type="button"
                    onClick={() => handleOpenAttention()}
                  >
                    <Icon
                      iconName={"icon-heart"}
                      width={"24px"}
                      height={"24px"}
                      stroke={"#54ADFF"}
                    />
                  </Button>
                  <Button type="button" onClick={() => handleClickDelete()}>
                    <Icon
                      iconName={"icon-trash"}
                      width={"24px"}
                      height={"24px"}
                      stroke={"#54ADFF"}
                    />
                  </Button>
                </Div2>
              </Div1>
              <Ul>
                <CommonItemList iconName={"icon-location"}>
                  {formattingOverviewCity(item.place)}
                </CommonItemList>
                <CommonItemList iconName={"icon-clock"}>
                  {formattingOverviewYear(formatYears(item.birthday) + " year")}
                </CommonItemList>
                <CommonItemList
                  iconName={item.sex === "female" ? "icon-female" : "icon-male"}
                >
                  {item.sex}
                </CommonItemList>
              </Ul>
            </Div>

            <Div3>
              <P1>{formattingOverview(item.title)}</P1>
              <Button1 onClick={() => handleClickCards(item)}>
                <span>Learn more</span>
                <Icon
                  iconName={"icon-pawprint"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#54ADFF"}
                  fill={"#54ADFF"}
                />
              </Button1>
            </Div3>
          </Info>
        ))} */}

      </List>
      <WrapperPagination>
        {lenght <= 10 || (
          <Pagination
            onChange={onChange}
            current={currentPage}
            showLessItems
            total={lenght}
            showTitle={false}
          />
        )}
      </WrapperPagination>
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
