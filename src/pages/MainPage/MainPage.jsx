import {
  Container,
  Brownie,
  Cat,
  Frenchie,
  MainTitle,
} from "./MainPage.styled";

import frenchie from "../images/mainPage/mn-des-1@1x.png";
import brownie from "../images/mainPage/mn-des-2@2x.png";
import cat from "../images/mainPage/mn-des-3@2x.png";

const MainPage = () => {
  return (
    <Container>
      <MainTitle>Take good care of your small pets</MainTitle>
      <div>
        <Frenchie>
          <img src={frenchie} alt="french bulldog" />
        </Frenchie>
        <div>
          <Brownie src={brownie} alt="big white-brown dog" />
        </div>
        <div>
          <Cat src={cat} alt="cat" />
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
