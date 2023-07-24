import PropTypes from "prop-types";

import {
  GoProfileBtn,
  CloseIcon,
  Title,
  SideInfo,
  PawIcon,
  WrapperModal,
} from "./ModalCongrats.styled";
import { ModalComponents } from "../ModalComponents/ModalComponents";

export function ModalCongrats({ active, setShow }) {
  const handleClickClose = (e) => {
    if (e.currentTarget === e.target) {
      setShow(false);
    }
  };
  return (
    <>
      <ModalComponents onClose={setShow} active={active}>
        <WrapperModal>
          <Title>Congrats!</Title>
          <CloseIcon onClick={handleClickClose}>X</CloseIcon>
          <SideInfo>Your registration is successful</SideInfo>
          <GoProfileBtn onClick={handleClickClose}>
            Go to profile <PawIcon></PawIcon>
          </GoProfileBtn>
        </WrapperModal>
      </ModalComponents>
    </>
  );
}

ModalCongrats.propTypes = {
  active: PropTypes.bool,
  setShow: PropTypes.func,
};
