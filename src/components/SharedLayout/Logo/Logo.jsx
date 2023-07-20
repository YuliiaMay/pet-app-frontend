import { MainLogo } from "./Logo.styled";
import decor from "./LogoPet.jpg";
export const Logo = () => {
  return (
    <MainLogo>
      <img src={decor} alt="logotype" />
    </MainLogo>
  );
};
