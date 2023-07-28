import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import Pagination from "rc-pagination";

import { selectNotieces } from "../../../redux/selectors";
import { fetchNotices } from "../../../redux/noticesSlice/operations";

import { Icon } from "../../../components/Icon/Icon";

import { formatYears } from "../../../utils";
import { ModalNotice } from "../../Modals/ModalNotice/ModalNotice";

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
import { useLocation } from "react-router-dom";
import { CommonItemList } from "../CommonItemList/CommonItemList";
import scrollToTop from "../../../utils/scrollToTop";

const NoticesCategoriesList = () => {
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [currentCategory, setCurrentCategory] = useState("sale");

  const [showModal, setShowModal] = useState(false);
  const [oneCard, setOneCard] = useState(null);
  const location = useLocation();

  const notices = useSelector(selectNotieces);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetching) return;
    dispatch(fetchNotices({ page: currentPage, category: currentCategory }));
    scrollToTop();
    setFetching(false);
  }, [currentCategory, currentPage, dispatch, fetching]);

  const handleClickCards = (item) => {
    setShowModal(true);
    setOneCard(item);
  };

  const formattingOverview = (text) => {
    let newFormat = text;
    if (newFormat.length > 15) {
      newFormat = text.slice(0, 15) + "...";
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
      setCurrentCategory("for/free");
      setFetching(true);
    }
    setCurrentPage(1);
  }, [location.pathname]);

  const onChange = (page) => {
    setCurrentPage(page);
    setFetching(true);
  };

  return (
    <>
      <List>
        {notices.map((item) => (
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
        ))}
      </List>
      <WrapperPagination>
        <Pagination
          onChange={onChange}
          current={currentPage}
          showLessItems
          total={40}
          showTitle={false}
        />
      </WrapperPagination>
      <ModalNotice active={showModal} setShow={setShowModal} card={oneCard} />
    </>
  );
};

NoticesCategoriesList.propTypes = {
  props: PropTypes.object,
};
export default NoticesCategoriesList;
