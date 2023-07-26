import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { selectNotieces } from "../../../redux/selectors";
import { fetchNotices } from "../../../redux/noticesSlice/operations";

import { Icon } from "../../../components/Icon/Icon";
import { ResponsiveContainer } from "../../../assets/styles/ResponsiveContainer";
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
} from "./NoticesPetCard.styled";
import { useLocation } from "react-router-dom";
import { CommonItemList } from "../CommonItemList/CommonItemList";

const NoticesCategoriesList = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [fetching, setFetching] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [oneCard, setOneCard] = useState(null);
  const location = useLocation();

  const notices = useSelector(selectNotieces);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetching) return;
    dispatch(fetchNotices());
    setFetching(false);
  }, [dispatch, fetching]);

  const handleClickCards = (item) => {
    setShowModal(true);
    setOneCard(item);
  };

  const formattingOverview = (text) => {
    let newFormat = text;
    if (newFormat.length > 20) {
      newFormat = text.slice(0, 20) + "...";
    }
    return newFormat;
  };

  useEffect(() => {
    let visible = [];
    if (location.pathname === "/notices/sell") {
      visible = notices.filter((ite) => ite.category === "sale");
    } else if (location.pathname === "/notices/lost-found") {
      visible = notices.filter((ite) => ite.category === "lost/found");
    } else if (location.pathname === "/notices/for-free") {
      visible = notices.filter((ite) => ite.category === "in good hands");
    }

    setVisibleCards(visible);
  }, [location.pathname, notices]);

  return (
    <ResponsiveContainer>
      <List>
        {visibleCards.map((item) => (
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
                      fill={"#54ADFF"}
                    />
                  </Button>
                </Div2>
              </Div1>
              <Ul>
                <CommonItemList iconName={"icon-location"}>
                  {item.place}
                </CommonItemList>
                <CommonItemList iconName={"icon-clock"}>
                  {formatYears(item.birthday)} year
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
      <ModalNotice active={showModal} setShow={setShowModal} card={oneCard} />
    </ResponsiveContainer>
  );
};

NoticesCategoriesList.propTypes = {
  props: PropTypes.object,
};
export default NoticesCategoriesList;
