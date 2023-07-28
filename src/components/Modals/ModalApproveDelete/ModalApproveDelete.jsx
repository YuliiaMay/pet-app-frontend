import PropTypes from "prop-types";

import { ModalComponents } from "../ModalComponents/ModalComponents";
import {
  ButtonsBox,
  CloseBtn,
  CloseIcon,
  DeleteIcon,
  Wrapper,
  YesBtn,
} from "./ModalApproveDelete.styled";
import { Icon } from "../../Icon/Icon";

const ModalApproveDelete = ({ active, setShow }) => {
  const toggleMenu = () => {
    setShow(!active);
  };
  return (
    <>
      <ModalComponents onClose={setShow} active={active}>
        <CloseIcon onClick={toggleMenu}>
          <Icon
            iconName={"icon-cross"}
            width={"24px"}
            height={"24px"}
            stroke={"#54ADFF"}
            fill={"#54ADFF"}
          />
        </CloseIcon>
        <Wrapper>
          <h2>Delete adverstiment?</h2>
          <p>
            Are you sure you want to delete{" "}
            <span>“Cute dog looking for a home”</span>?
            <br />
            You can`t undo this action.
          </p>

          <ButtonsBox>
            <CloseBtn type="button" onClick={toggleMenu}>
              Cancel
            </CloseBtn>
            <YesBtn type="button">
              Yes
              <DeleteIcon>
                <Icon
                  iconName={"icon-trash"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#FEF9F9"}
                  fill={"#FEF9F9"}
                />
              </DeleteIcon>
            </YesBtn>
          </ButtonsBox>
        </Wrapper>
      </ModalComponents>
    </>
  );
};

export default ModalApproveDelete;

ModalApproveDelete.propTypes = {
  active: PropTypes.bool,
  setShow: PropTypes.func,
};
