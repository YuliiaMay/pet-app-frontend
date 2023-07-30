import {
  Button,
  Div,
  Div1,
  Div2,
  Img,
  Info,
  PP,
  Ul,
} from "./CommonItemList.styled";
import PropTypes from "prop-types";

import { Icon } from "../../../components/Icon/Icon";
import { Div3, P1 } from "../NoticesCategoriesList/NoticesPetCard.styled";
import { formatYears } from "../../../utils";

export const CommonItemList = ({ item, children }) => {
  const formattingOverview = (text) => {
    let newFormat = text;
    if (newFormat.length > 15) {
      newFormat = text.slice(0, 21) + "...";
    }
    return newFormat;
  };

  const formattingOverviewCity = (text) => {
    let newFormat = text;
    if (newFormat.length > 6) {
      newFormat = text.slice(0, 4) + "...";
    }
    return newFormat;
  };

  const formattingOverviewYear = (text) => {
    let newFormat = text;
    if (newFormat.length > 6) {
      newFormat = text.slice(0, 4) + "...";
    }
    return newFormat;
  };

  return (
    <Info>
      <Div>
        <Img src={item.imgUrl} alt="pet" loading="lazy"></Img>
        <Div1>
          <PP>{item.category}</PP>
          <Div2>
            <Button aria-label="add to favorites">
              <Icon
                iconName={"icon-heart"}
                width={"24px"}
                height={"24px"}
                stroke={"#54ADFF"}
              />
            </Button>
          </Div2>
        </Div1>
        <Ul>
          <Icon
            iconName={"icon-location"}
            width={"24px"}
            height={"24px"}
            stroke={"#54ADFF"}
          >
            {formattingOverviewCity(item.place)}
          </Icon>
          <Icon
            iconName={"icon-clock"}
            width={"24px"}
            height={"24px"}
            stroke={"#54ADFF"}
          >
            {formattingOverviewYear(formatYears(item.birthday) + " year")}
          </Icon>
          <Icon
            iconName={item.sex === "female" ? "icon-female" : "icon-male"}
            width={"24px"}
            height={"24px"}
            stroke={"#54ADFF"}
          >
            {item.sex}
          </Icon>
        </Ul>
      </Div>
      <Div3>
        <P1>{formattingOverview(item.title)}</P1>
        {children}
      </Div3>
    </Info>
  );
};

CommonItemList.propTypes = {
  item: PropTypes.object,
  children: PropTypes.object,
};
