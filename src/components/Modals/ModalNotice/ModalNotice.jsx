import PropTypes from "prop-types";

import { ModalComponents } from "../ModalComponents/ModalComponents";
import { Icon } from "../../Icon/Icon";

import { formatDate, convertPhone, checkPoster } from "../../../utils";

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

export function ModalNotice({ active, setShow, card }) {
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
    text,
    favorite,
  } = card;

  const handleClickClose = () => {
    setShow(false);
  };

  const handleClickFavorite = () => {};

  const checkFavorite = (favorite) => {
    console.log("favorite", favorite);
    return favorite ? (
      <>
        Favorite
        <Icon
          iconName={"icon-heart-full"}
          width={"24px"}
          height={"24px"}
          stroke={"#C5DFF6"}
          fill={"#C5DFF6"}
        />{" "}
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
              <span>In good hands</span>
              <ImgCards src={checkPoster(imgUrl)} alt="name image" />
            </ImgWrapper>
            <WrapperInfo>
              <Title>Cute dog looking for a home</Title>

              <WrapperListInfo>
                <table>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>
                        <span>{name}</span>
                      </td>
                    </tr>
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
            <span>{text}</span>
          </SideInfo>
          <WrapperBtn>
            <GoProfileBtn onClick={handleClickFavorite}>
              {checkFavorite(favorite)}
            </GoProfileBtn>

            <ContactLink href={`tel:${phone}`}>Contact</ContactLink>
          </WrapperBtn>
        </WrapperModal>
      </ModalComponents>
    </>
  );
}

ModalNotice.propTypes = {
  active: PropTypes.bool,
  setShow: PropTypes.func,
  card: PropTypes.object,
};

// Add to
//             <Icon
//               iconName={"icon-heart"}
//               width={"24px"}
//               height={"24px"}
//               stroke={"#ffffff"}
//               fill={"#ffffff"}
//             />
//             <Icon
//               iconName={"icon-heart-full"}
//               width={"24px"}
//               height={"24px"}
//               stroke={"#ffffff"}
//               fill={"#340cf9"}
//             />
