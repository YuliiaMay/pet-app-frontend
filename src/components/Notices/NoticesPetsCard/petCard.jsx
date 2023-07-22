import PropTypes from "prop-types";
import { Icon } from "../../../images/Icon";
import {
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
} from "./petCard.styled";

export const PetCard = (props) => {
  return (
    <>
      {props.pets.map((pet) => (
        <Info key={pet.name}>
          <Div>
            <Img src={pet.imgUrl} alt="pet" loading="lazy"></Img>
            <Div1>
              <PP>{pet.category}</PP>
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
                <Span>{pet.place}</Span>
              </Li>
              <Li>
                <Icon
                  iconName={"icon-clock"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#54ADFF"}
                  fill={"#54ADFF"}
                />
                <Span>{pet.birthday}</Span>
              </Li>
              <Li>
                <Icon
                  iconName={"icon-female"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#54ADFF"}
                  fill={"#54ADFF"}
                />
                <Span>{pet.sex}</Span>
              </Li>
            </Ul>
          </Div>
          <Div3>
            <P1>{pet.title}</P1>
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
    </>
  );
};

PetCard.propTypes = {
  props: PropTypes.object,
};
