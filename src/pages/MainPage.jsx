import { Header } from "../components/SharedLayout/Header/Header";
import { Brownie, Cat, Frenchie, MainTitle } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <div>
      <MainTitle>Take good care of your small pets</MainTitle>
      <div>
        <Frenchie></Frenchie>
        <Brownie></Brownie>
        <Cat></Cat>
      </div>
    </div>
  );
};