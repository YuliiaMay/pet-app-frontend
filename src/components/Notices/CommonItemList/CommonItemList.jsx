import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "../../../components/Icon/Icon";

import { selectFavorite } from "../../../redux/selectors";
import { selectUser } from "../../../redux/authSlice/selectors";

import {
  formatYears,
  formattingCitName,
  formattingAge,
  formattingTitle,
  checkPoster,
} from "../../../utils";

import { fetchFavoriteAdd } from "../../../redux/noticesSlice/operations";
import ModalAttention from "../../Modals/ModalAttention/ModalAttention";
import { ModalNotice } from "../../Modals/ModalNotice/ModalNotice";

import {
  Button,
  Div,
  Div1,
  Div2,
  Img,
  Info,
  PP,
  Ul,
  Li,
  Span,
} from "./CommonItemList.styled";
import {
  Button1,
  Div3,
  P1,
} from "../NoticesCategoriesList/NoticesPetCard.styled";

export const CommonItemList = ({
  item,
  handleClickDelete,
  handleClickDeleteFavorite,
}) => {
  const user = useSelector(selectUser);
  const favNotices = useSelector(selectFavorite);
  const [showModalAttention, setShowModalAttention] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [oneCard, setOneCard] = useState(null);

  const dispatch = useDispatch();

  const [isFollowingTrash, setIsFollowingTrash] = useState(false);

  const [isFavoritesBtn, setIsFavoritesBtn] = useState(false);

  useEffect(() => {

//     if (!user.token) return;
//     setIsFavoritesBtn(savedFavoriteId.includes(item._id));
//   }, [item._id, savedFavoriteId, user.token]);

//   const handleFavoritesBtn = (itemId, flag) => {
//     if (!user.token) {
//       setShowModalAttention(true);
//       return;
//     }

//     if (!flag) {

    setIsFavoritesBtn(!!favNotices?.find((fav) => fav._id === item._id));
  }, [item._id]);

  const handleFollowAdd = useCallback(
    (itemId) => {
      if (!user.token) {
        setShowModalAttention(true);
        return;
      }

      setIsFavoritesBtn(true);

      dispatch(fetchFavoriteAdd(itemId));
      return;
    },
    [dispatch, user.token]
  );

  const handleFollowDel = useCallback(
    (itemId) => {
      setIsFavoritesBtn(false);

      handleClickDeleteFavorite(itemId);
    },
    [handleClickDeleteFavorite]
  );

  const handleClickDeleteTrash = (id) => {
    handleClickDelete(id);
  };

  useEffect(() => {
    if (!user.token) return;
    if (user._id === item.owner) {
      setIsFollowingTrash(true);
      return;
    }
  }, [item.owner, user]);

  const handleClickCards = (it) => {
    setOneCard(it);
    setShowModal(true);
  };

  return (
    <Info>
      <Div>
        <Img src={checkPoster(item.imgUrl)} alt="pet" loading="lazy"></Img>
        <Div1>
          <PP>{item.category}</PP>
          <Div2>
            <Button aria-label="add to favorites">
              {isFavoritesBtn ? (
                <div onClick={() => handleFollowDel(item._id)}>
                  <Icon
                    iconName={"icon-heart"}
                    width={"24px"}
                    height={"24px"}
                    stroke={"#54ADFF"}
                    fill={"#54ADFF"}
                  />
                </div>
              ) : (
                <div onClick={() => handleFollowAdd(item._id)}>
                  <Icon
                    iconName={"icon-heart-full"}
                    width={"24px"}
                    height={"24px"}
                    stroke={"#54ADFF"}
                  />
                </div>
              )}
            </Button>


            {isFollowingTrash ? (
              <Button
                aria-label="add to trash"
                onClick={() => handleClickDeleteTrash(item._id)}
              >
                <Icon
                  iconName={"icon-trash"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#54ADFF"}
                />
              </Button>
            ) : (
              ""
            )}
          </Div2>
        </Div1>
        <Ul>
          <Li>
            <Icon
              iconName={"icon-location"}
              width={"24px"}
              height={"24px"}
              stroke={"#54ADFF"}
            ></Icon>

            <Span> {formattingCitName(item.place)}</Span>
          </Li>
          <Li>
            <Icon
              iconName={"icon-clock"}
              width={"24px"}
              height={"24px"}
              stroke={"#54ADFF"}
            ></Icon>
            <Span>{formattingAge(formatYears(item.birthday) + " year")}</Span>
          </Li>
          <Li>
            <Icon
              iconName={item.sex === "female" ? "icon-female" : "icon-male"}
              width={"24px"}
              height={"24px"}
              stroke={"#54ADFF"}
            ></Icon>
            <Span>{item.sex}</Span>
          </Li>
        </Ul>
      </Div>
      <Div3>
        <P1>{formattingTitle(item.title)}</P1>

        <Button1 onClick={() => handleClickCards(item)}>
          <span>Learn more</span>
          <Icon iconName={"icon-pawprint"} fill={"#54ADFF"} />
        </Button1>
      </Div3>
      <>
        <ModalNotice
          active={showModal}
          setShow={setShowModal}
          card={oneCard}
          isFavorites={isFavoritesBtn}
          handleFollowAdd={handleFollowAdd}
          handleFollowDel={handleFollowDel}
        />

        <ModalAttention
          active={showModalAttention}
          setShow={setShowModalAttention}
        />
      </>
    </Info>
  );
};
CommonItemList.propTypes = {
  item: PropTypes.object,
  children: PropTypes.object,
  handleClickDelete: PropTypes.func,
  handleClickDeleteFavorite: PropTypes.func,
  isFavorite: PropTypes.bool,
};
