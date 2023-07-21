import { Link } from "react-router-dom";
import { MainLogo } from "./Logo.styled";
import decor from "./LogoPet.jpg";
export const Logo = () => {
  return (
    <Link to="/main">
      <MainLogo>
        <img src={decor} alt="logotype" />
      </MainLogo>
    </Link>
  );
};
