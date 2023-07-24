import PropTypes from "prop-types";
import { Icon } from "../../../components/Icon/Icon";
import {
  List,
  Info,
  Div,
  Img,
  Div1,
  PP,
  Div2,
  Button,
  Ul,
  Li,
  Span,
  Div3,
  P1,
  Button1,
} from "./NoticesPetCard.styled";

export const NoticesPetCardList = (items) => {
  return (
    <List>
      {items.map((item) => (
        <Info key={item.name}>
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
                    fill={"#54ADFF"}
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
                  fill={"#54ADFF"}
                />
                <Span>{item.place}</Span>
              </Li>
              <Li>
                <Icon
                  iconName={"icon-clock"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#54ADFF"}
                  fill={"#54ADFF"}
                />
                <Span>{item.birthday}</Span>
              </Li>
              <Li>
                <Icon
                  iconName={item.sex === "Female" ? "icon-female" : "icon-male"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#54ADFF"}
                  fill={"#54ADFF"}
                />
                <Span>{item.sex}</Span>
              </Li>
            </Ul>
          </Div>
          <Div3>
            <P1>{item.title}</P1>
            <Button1>
              <span>Learn more</span>
              <Icon
                iconName={"icon-pawprint"}
                width={"24px"}
                height={"24px"}
                stroke={"#54ADFF"}
                fill={"#54ADFF"}
              />
            </Button1>
          </Div3>
        </Info>
      ))}
    </List>
  );
};

NoticesPetCardList.propTypes = {
  props: PropTypes.object,
};
