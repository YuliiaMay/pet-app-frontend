import errorDesk from "../../images/errorPage/error-desk.png";
import errorDesk2 from "../../images/errorPage/error-desk2.png";
import errorTab from "../../images/errorPage/error-tab.png";
import errorTab2 from "../../images/errorPage/error-tab2.png";
import errorMob from "../../images/errorPage/error-mob.png";
import errorMob2 from "../../images/errorPage/error-mob2.png";
import {
  BackToMain,
  ErrorImg,
  ErrorTitle,
  Wrapper,
} from "./NotFoundPage.styled";
import { ResponsiveContainer } from "../../assets/styles/ResponsiveContainer";
import { Icon } from "../../components/Icon/Icon";

const NotFoundPage = () => {
  return (
    <ResponsiveContainer>
      <Wrapper>
        <ErrorTitle> Ooops! This page is not found :(</ErrorTitle>
        <ErrorImg>
          <source
            media="(min-width: 1280px)"
            srcSet={`${errorDesk} 1x, ${errorDesk2} 2x`}
            alt="Error page"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${errorTab} 1x, ${errorTab2} 2x`}
            alt="Error page"
          />
          <source
            media="(min-width: 320px)"
            srcSet={`${errorMob} 1x, ${errorMob2} 2x`}
            alt="Error page"
          />
          <img src={errorDesk} alt="Error page" />
        </ErrorImg>
        <BackToMain to="/main">
          To main page
          <Icon
            iconName={"icon-pawprint"}
            width={"24px"}
            height={"24px"}
            stroke={"#ffffff"}
            fill={"#ffffff"}
          />
        </BackToMain>
      </Wrapper>
    </ResponsiveContainer>
  );
};

export default NotFoundPage;
