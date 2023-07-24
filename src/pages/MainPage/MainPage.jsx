import {
  Container,
  Brownie,
  Cat,
  Frenchie,
  MainTitle,
  PhotoBox,
} from "./MainPage.styled";

import frenchie from "../../images/mainPage/mn-des-1@1x.png";
import frenchie2 from "../../images/mainPage/mn-des-1@2x.png";
import frenchieTab from "../../images/mainPage/mn-tab-1@1x.png";
import frenchieTab2 from "../../images/mainPage/mn-tab-1@2x.png";
import frenchieMob from "../../images/mainPage/mn-mob-1@1x.png";
import frenchieMob2 from "../../images/mainPage/mn-mob-1@2x.png";
import brownie from "../../images/mainPage/mn-des-2@1x.png";
import brownie2 from "../../images/mainPage/mn-des-2@2x.png";
import brownieTab from "../../images/mainPage/mn-tab-2@1x.png";
import brownieTab2 from "../../images/mainPage/mn-tab-2@2x.png";
import brownieMob from "../../images/mainPage/mn-mob-2@1x.png";
import brownieMob2 from "../../images/mainPage/mn-mob-2@2x.png";
import catDesk from "../../images/mainPage/mn-des-3@1x.png";
import catDesk2 from "../../images/mainPage/mn-des-3@2x.png";
import catTab from "../../images/mainPage/mn-tab-3@1x.png";
import catTab2 from "../../images/mainPage/mn-tab-3@2x.png";
import catMob from "../../images/mainPage/mn-mob-3@1x.png";
import catMob2 from "../../images/mainPage/mn-mob-3@2x.png";
import { ResponsiveContainer } from "../../assets/styles/ResponsiveContainer";

const MainPage = () => {
  return (
    <ResponsiveContainer>
      <Container>
        <MainTitle>Take good care of your small pets</MainTitle>
        <PhotoBox>
          <Frenchie>
            <source
              media="(min-width: 1280px)"
              srcSet={`${frenchie} 1x, ${frenchie2} 2x`}
              alt="french bulldog"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${frenchieTab} 1x, ${frenchieTab2} 2x`}
              alt="french bulldog"
            />
            <source
              media="(min-width: 320px)"
              srcSet={`${frenchieMob} 1x, ${frenchieMob2} 2x`}
              alt="french bulldog"
            />
            <img src={frenchie} alt="french bulldog" />
          </Frenchie>

          <Brownie>
            <source
              media="(min-width: 1280px)"
              srcSet={`${brownie} 1x, ${brownie2}`}
              alt="big white-brown dog"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${brownieTab} 1x, ${brownieTab2}`}
              alt="big white-brown dog"
            />
            <source
              media="(min-width: 320px)"
              srcSet={`${brownieMob} 1x, ${brownieMob2}`}
              alt="big white-brown dog"
            />
            <img src={brownie} alt="big white-brown dog" />
          </Brownie>

          <Cat>
            <source
              media="(min-width: 1280px)"
              srcSet={`${catDesk} 1x, ${catDesk2} 2x`}
              alt="cat"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${catTab} 1x, ${catTab2} 2x`}
              alt="cat"
            />
            <source
              media="(min-width: 320px)"
              srcSet={`${catMob} 1x, ${catMob2} 2x`}
              alt="cat"
            />
            <img src={catDesk} alt="cat" />
          </Cat>
        </PhotoBox>
      </Container>
    </ResponsiveContainer>
  );
};

export default MainPage;
