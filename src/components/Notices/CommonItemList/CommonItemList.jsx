import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
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
import PropTypes from "prop-types";
import {useToggle} from "../../../hooks/useToggle"
import { Icon } from "../../../components/Icon/Icon";

import {
  Button1,
  Div3,
  P1,
} from "../NoticesCategoriesList/NoticesPetCard.styled";

import {
  formatYears,
  formattingCitName,
  formattingAge,
  formattingTitle,
  checkPoster,
} from "../../../utils";

import { selectUser } from "../../../redux/authSlice/selectors";

import { fetchFavoriteAdd, fetchFavoriteDelete } from "../../../redux/noticesSlice/operations";
import ModalAttention from "../../Modals/ModalAttention/ModalAttention";
import { ModalNotice } from "../../Modals/ModalNotice/ModalNotice";
import { selectFavorite } from "../../../redux/selectors";


export const CommonItemList = ({
  item,
  handleClickDelete,
  handleClickDeleteFavorite,
}) => {

  const user = useSelector(selectUser);
  const favNotices = useSelector(selectFavorite);
  const [showModalAttention, setShowModalAttention] = useState(false);
  const { isOpen, toggle } = useToggle();
  const [showModal, setShowModal] = useState(false);
  const [oneCard, setOneCard] = useState(null);


  const dispatch = useDispatch();
  const [isFollowingTrash, setIsFollowingTrash] = useState(false);
  const [isFavoritesBtn, setIsFavoritesBtn] = useState(false);


  // useEffect(() => {
  //   if (!user.token) return;
  //   setIsFavoritesBtn(favNotices.find(({_id}) => _id === item._id));
  // }, [favNotices, item._id, user.token]); 

  
  useEffect(() => {
    setIsFavoritesBtn(!!favNotices?.find((fav) => fav._id === item._id))
  }, [favNotices, item._id])
  

  const handleFavoritesBtn = (itemId, flag) => {
    // if (!user.token) {
    //   setShowModalAttention(true);
    //   return;
    // }
    
    setIsFavoritesBtn(!isFavoritesBtn);
      console.log(itemId);
      console.log(flag);

      
      // dispatch(fetchFavoriteDelete(itemId));
      // dispatch(fetchFavoriteAdd(itemId));


    // setIsFavoritesBtn(false);
    if (!flag) {
      dispatch(fetchFavoriteAdd(itemId));
      return;
    }
    handleClickDeleteFavorite(itemId);
    // dispatch(fetchFavoriteDelete(itemId));
    
  };

  const handleFollowClick = (item) => {
    if (!user.token) {
      setShowModalAttention(true);
      return;
    }

    // dispatch(setFavoriteId(item));
  };

  const [isFollowing, setIsFollowing] = useState(false);

  const handleClickDeleteTest = (id) => {
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
    console.log(it);
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

            <div
              // onClick={() => handleFavoritesBtn(item._id, isFavoritesBtn)}
            >
              <Button
                aria-label="add to favorites"
                onClick={() => handleFavoritesBtn(item._id, isFavoritesBtn)}
              >
                {
                  isFavoritesBtn
                    ? <Icon
                        iconName={"icon-heart-full"}
                        width={"24px"}
                        height={"24px"}
                        stroke={"#54ADFF"}
                        fill={"#54ADFF"}
                        // $follow={follow}
                      />  
                    : <Icon
                        iconName={"icon-heart-full"}
                        width={"24px"}
                        height={"24px"}
                        stroke={"#54ADFF"}
                        // fill={"#54ADFF"}
                        // $follow={follow}
                      />
                }

              </Button>
            </div>
            {isFollowingTrash ? (

              <Button
                aria-label="add to trash"
                onClick={() => handleClickDeleteTest(item._id)}
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

