import PropTypes from "prop-types";
import { ModalComponents } from "../ModalComponents/ModalComponents";
import { Icon } from "../../Icon/Icon";
import {
  LogInBtn,
  RegisterBtn,
} from "../../SharedLayout/AuthNav/AuthNav.styled";

const ModalAttention = ({ active, setShow }) => {
  const toggleMenu = () => {
    setShow(!active);
  };
  return (
    <>
      <div>
        <h2>Attention</h2>
        <p>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not have an account yet, you must register
          to access these features.
        </p>
        <div>
          <LogInBtn to="/login">
            Log IN
            <PawIcon />
          </LogInBtn>
          <RegisterBtn to="/register">Registration</RegisterBtn>
        </div>
      </div>
    </>
  );
};
