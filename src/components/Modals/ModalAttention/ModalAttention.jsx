import PropTypes from "prop-types";
import { ModalComponents } from "../ModalComponents/ModalComponents";
import { Icon } from "../../Icon/Icon";
import { CloseIcon } from "../ModalApproveDelete/ModalApproveDelete.styled";
import {
  BtnBox,
  LogInModal,
  RegisterModal,
  WrapperInfo,
} from "./ModalAttention.styled";
import { useAuth } from "../../../hooks/useAuth";

const ModalAttention = ({ active, setShow }) => {
  const { isLoggedIn } = useAuth();
  const toggleMenu = () => {
    setShow(!active);
  };
  return (
    <>
      {!isLoggedIn && (
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
          <WrapperInfo>
            <h2>Attention</h2>
            <p>
              We would like to remind you that certain functionality is
              available only to authorized users.If you have an account, please
              log in with your credentials. If you do not have an account yet,
              you must register to access these features.
            </p>
            <BtnBox>
              <LogInModal to="/login">
                Log IN
                <Icon
                  iconName={"icon-pawprint"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#ffffff"}
                  fill={"#ffffff"}
                />
              </LogInModal>
              <RegisterModal to="/register">Registration</RegisterModal>
            </BtnBox>
          </WrapperInfo>
        </ModalComponents>
      )}
    </>
  );
};
export default ModalAttention;

ModalAttention.propTypes = {
  active: PropTypes.bool,
  setShow: PropTypes.func,
};
