import PropTypes from "prop-types";
import { useState } from "react";

import { ModalComponents } from "../ModalComponents/ModalComponents";
import { Icon } from "../../Icon/Icon";

import { formatDate, convertPhone, checkPoster } from "../../../utils";

import ModalAttention from "../ModalAttention/ModalAttention";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/authSlice/selectors";

import {
  WrapperModal,
  CloseIcon,
  GoProfileBtn,
  Title,
  ContainerInfo,
  SideInfo,
  WrapperInfo,
  WrapperListInfo,
  ImgWrapper,
  WrapperBtn,
  ContactLink,
  ImgCards,
} from "./ModalNotice.styled";

export function ModalNotice({
  card,
  active,
  setShow,
  isFavorites,
  handleFollowAdd,
  handleFollowDel,
}) {
  const [showModalAttention, setShowModalAttention] = useState(false);
  const user = useSelector(selectUser);

  const [isFavoritesBtn, setIsFavoritesBtn] = useState(isFavorites);
  if (!card) return;

  const handleClickClose = () => {
    setShow(false);
  };
  if (!card) return;
  const {
    imgUrl,
    name,
    birthday,
    breed,
    place,
    sex,
    email,
    phone,
    comments,
    title,
    category,
    price,
  } = card;

  const handleClickFavorite = (itemId) => {
    if (!user.token) {
      setShowModalAttention(true);
      return;
    }

    if (isFavoritesBtn) {
      handleFollowDel(itemId);
    } else {
      handleFollowAdd(itemId);
    }

    setIsFavoritesBtn(!isFavoritesBtn);
  };

  const checkFavorite = (favorite) => {
    return favorite ? (
      <>
        Favorite
        <Icon
          iconName={"icon-heart-full"}
          width={"24px"}
          height={"24px"}
          stroke={"#C5DFF6"}
          fill={"#C5DFF6"}
        />
      </>
    ) : (
      <>
        Add to
        <Icon
          iconName={"icon-heart"}
          width={"24px"}
          height={"24px"}
          stroke={"#ffffff"}
          fill={"#ffffff"}
        />
      </>
    );
  };

  return (
    <>
      <ModalComponents onClose={setShow} active={active}>
        <WrapperModal>
          <CloseIcon onClick={handleClickClose}>
            <Icon
              iconName={"icon-cross"}
              width={"24px"}
              height={"24px"}
              stroke={"#54ADFF"}
              fill={"#54ADFF"}
            />
          </CloseIcon>
          <ContainerInfo>
            <ImgWrapper>
              <span>{category}</span>
              <ImgCards src={checkPoster(imgUrl)} alt="name image" />
            </ImgWrapper>
            <WrapperInfo>
              <Title>{title}</Title>

              <WrapperListInfo>
                <table>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>
                        <span>{name}</span>
                      </td>
                    </tr>
                    {!price <= 0 && (
                      <tr>
                        <td>Price:</td>
                        <td>
                          <span>{price} &#x20bf;</span>
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td>Birthday:</td>
                      <td>
                        <span>{formatDate(birthday)}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>
                        <span>{breed}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Place:</td>
                      <td>
                        <span>{place}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>The sex:</td>
                      <td>
                        <span>{sex}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>
                        <a href={`mailto:${email}`}>{email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>
                        <a href={`tel:${phone}`}>{convertPhone(phone)}</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </WrapperListInfo>
            </WrapperInfo>
          </ContainerInfo>
          <SideInfo>
            Comments:
            <span>{comments}</span>
          </SideInfo>
          <WrapperBtn>
            <GoProfileBtn onClick={() => handleClickFavorite(card._id)}>
              {checkFavorite(isFavoritesBtn)}
            </GoProfileBtn>

            <ContactLink href={`tel:${phone}`}>Contact</ContactLink>
          </WrapperBtn>
        </WrapperModal>
      </ModalComponents>
      <>
        <ModalAttention
          active={showModalAttention}
          setShow={setShowModalAttention}
        />
      </>
    </>
  );
}

ModalNotice.propTypes = {
  active: PropTypes.bool,
  isFavorites: PropTypes.bool,
  setShow: PropTypes.func,
  card: PropTypes.object,
  handleFollowAdd: PropTypes.func,
  handleFollowDel: PropTypes.func,
};
