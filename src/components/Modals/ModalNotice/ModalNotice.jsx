import PropTypes from "prop-types";
import { ModalComponents } from "../ModalComponents/ModalComponents";
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
} from "./ModalNotice.slyled";

export function ModalNotice({ active, setShow }) {
  const handleClickClose = (e) => {
    if (e.currentTarget === e.target) {
      setShow(false);
    }
  };
  return (
    <>
      <ModalComponents onClose={setShow} active={active}>
        <WrapperModal>
          <CloseIcon onClick={handleClickClose}>X</CloseIcon>
          <ContainerInfo>
            <ImgWrapper>
              <span>In good hands</span>
              <img src="https://via.placeholder.com/262x298" alt="name image" />
            </ImgWrapper>
            <WrapperInfo>
              <Title>Cute dog looking for a home</Title>

              <WrapperListInfo>
                <table>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>
                        <span>Rich</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Birthday:</td>
                      <td>
                        <span>21.09.2020</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Type:</td>
                      <td>
                        <span>Pomeranian</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Place:</td>
                      <td>
                        <span>Lviv</span>
                      </td>
                    </tr>
                    <tr>
                      <td>The sex:</td>
                      <td>
                        <span>male</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>
                        <a href="mailto:user@mail.com">user@mail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>
                        <a href="tel:+380971234567"> +380971234567</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </WrapperListInfo>
            </WrapperInfo>
          </ContainerInfo>
          <SideInfo>
            Comments:
            <span>
              Rich would be the perfect addition to an active family that loves
              to play and go on walks. I bet he would love having a doggy
              playmate too!
            </span>
          </SideInfo>
          <WrapperBtn>
            <GoProfileBtn onClick={handleClickClose}>Add to</GoProfileBtn>
            <ContactLink href="+380971234567">Contact</ContactLink>
          </WrapperBtn>
        </WrapperModal>
      </ModalComponents>
    </>
  );
}

ModalNotice.propTypes = {
  active: PropTypes.bool,
  setShow: PropTypes.func,
};
