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
  Li,
  Span,
  Div3,
  P1,
  Button1,
  WrapperPagination,
} from "./NoticesPetCard.styled";
import { useLocation } from "react-router-dom";
import usePagination from "../../UI/Pagination/usePagination";

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

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 5,
    count: visibleCards.length,
  });

  console.log("visibleCards.length", visibleCards.length);
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
                <Li>
                  <Icon
                    iconName={"icon-location"}
                    width={"24px"}
                    height={"24px"}
                    stroke={"#54ADFF"}
                    fill={"#54ADFF"}
                  />
                  <Span>{item.place}</Span>
                </Li>
                <Li>
                  <Icon
                    iconName={"icon-clock"}
                    width={"24px"}
                    height={"24px"}
                    stroke={"#54ADFF"}
                    fill={"#54ADFF"}
                  />
                  <Span>{formatYears(item.birthday)} year</Span>
                </Li>
                <Li>
                  <Icon
                    iconName={
                      item.sex === "female" ? "icon-female" : "icon-male"
                    }
                    width={"24px"}
                    height={"24px"}
                    stroke={"#54ADFF"}
                    fill={"#54ADFF"}
                  />
                  <Span>{item.sex}</Span>
                </Li>
              </Ul>
            </Div>
            <Div3>
              {/* {item.title} */}
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
      <WrapperPagination>
        <>
          <>
            <div className="pagination">
              <p className="text">
                {page}/{totalPages}
              </p>
              <button
                onClick={prevPage}
                className={`page ${page === 1 && "disabled"}`}
              >
                &larr;
              </button>
              <button
                onClick={() => setPage(1)}
                className={`page ${page === 1 && "disabled"}`}
              >
                1
              </button>
              {gaps.before ? "..." : null}
              {/* @ts-ignore */}
              {gaps.paginationGroup.map((el) => (
                <button
                  onClick={() => setPage(el)}
                  key={el}
                  className={`page ${page === el ? "active" : ""}`}
                >
                  {el}
                </button>
              ))}
              {gaps.after ? "..." : null}
              <button
                onClick={() => setPage(totalPages)}
                className={`page ${page === totalPages && "disabled"}`}
              >
                {totalPages}
              </button>
              <button
                onClick={nextPage}
                className={`page ${page === totalPages && "disabled"}`}
              >
                &rarr;
              </button>
            </div>
            <div className="items">
              {visibleCards
                .slice(firstContentIndex, lastContentIndex)
                .map((el) => (
                  <div className="item" key={el.uid}>
                    <img
                      src={`https://avatars.dicebear.com/api/big-smile/${el.first_name}.svg`}
                      alt={`${el.username} profile`}
                      className="item__img"
                    />
                    <div className="item__info">
                      <p className="name">
                        {el.first_name} {el.last_name}{" "}
                        <span className="username">(@{el.username})</span>
                      </p>
                      <p className="job">{el.employment.title}</p>
                      <p
                        className={`status ${
                          el.subscription.status.toLowerCase() === "active"
                            ? "success"
                            : el.subscription.status.toLowerCase() === "blocked"
                            ? "danger"
                            : "warn"
                        }`}
                      >
                        {el.subscription.status}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </>
        </>
      </WrapperPagination>
    </ResponsiveContainer>
  );
};

NoticesCategoriesList.propTypes = {
  props: PropTypes.object,
};
export default NoticesCategoriesList;
