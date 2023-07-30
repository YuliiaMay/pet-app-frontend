import {
  Button,
  Div,
  Div1,
  Div2,
  Img,
  Info,
  PP,
  Ul,
  Li,
  Span,
} from "./CommonItemList.styled";
import PropTypes from "prop-types";

import { Icon } from "../../../components/Icon/Icon";
import { Div3, P1 } from "../NoticesCategoriesList/NoticesPetCard.styled";
import {
  formatYears,
  formattingCitName,
  formattingAge,
  formattingTitle,
} from "../../../utils";

export const CommonItemList = ({ item, children }) => {
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
          <Li>
            <Icon
              iconName={"icon-location"}
              width={"24px"}
              height={"24px"}
              stroke={"#54ADFF"}
            ></Icon>
            <Span> {formattingCitName(item.place)}</Span>
          </Li>
          <Li>
            <Icon
              iconName={"icon-clock"}
              width={"24px"}
              height={"24px"}
              stroke={"#54ADFF"}
            ></Icon>
            <Span>{formattingAge(formatYears(item.birthday) + " year")}</Span>
          </Li>
          <Li>
            <Icon
              iconName={item.sex === "female" ? "icon-female" : "icon-male"}
              width={"24px"}
              height={"24px"}
              stroke={"#54ADFF"}
            ></Icon>
            <Span>{item.sex}</Span>
          </Li>
        </Ul>
      </Div>
      <Div3>
        <P1>{formattingTitle(item.title)}</P1>
        {children}
      </Div3>
    </Info>
  );
};

CommonItemList.propTypes = {
  item: PropTypes.object,
  children: PropTypes.object,
};
