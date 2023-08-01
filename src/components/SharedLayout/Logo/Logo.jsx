import { Link } from "react-router-dom";
import { MainLogo } from "./Logo.styled";
import logoDesk from "./logoDesk.png";
import logoMob from "./logoMob.png";
export const Logo = () => {
  return (
    <Link to="/main">
      <MainLogo>
        <source media="(min-width: 768px)" srcSet={logoDesk} alt="logotype" />
        <source media="(min-width: 320px)" srcSet={logoMob} alt="logotype" />

        <img src={logoDesk} alt="logotype" />
      </MainLogo>
    </Link>
  );
};
