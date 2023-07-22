import {
  Container,
  PhotoBox,
  Brownie,
  Cat,
  Frenchie,
  MainTitle,
} from "./MainPage.styled";

import frenchie from "../images/mainPage/mn-des-1@1x.png";
import frenchie2 from "../images/mainPage/mn-des-1@2x.png";
import brownie from "../images/mainPage/mn-des-2@2x.png";
import cat from "../images/mainPage/mn-des-3@2x.png";

const MainPage = () => {
  return (
    <Container>
      <MainTitle>Take good care of your small pets</MainTitle>
      <PhotoBox>
        <div>
          <Frenchie
            src={frenchie}
            srcSet={`${frenchie2} 2x`}
            alt="french bulldog"
          />
        </div>
        <div>
          <Brownie src={brownie} alt="big white-brown dog" />
        </div>
        <div>
          <Cat src={cat} alt="cat" />
        </div>
      </PhotoBox>
    </Container>
  );
};

export default MainPage;
