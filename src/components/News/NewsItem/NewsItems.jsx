import formatDate from "../../../utils/formatDate";
import PropTypes from "prop-types";

import {
  Item,
  ImageWrapper,
  TextContent,
  NewsTitle,
  NewsBody,
  BottomWrapper,
  NewsDate,
  NewsLink,
} from "./NewsItem.styled";

export const NewsItem = ({ dataNews }) => {
  const formattingText = (text) => {
    let newFormat = text;
    if (newFormat.length > 50) {
      newFormat = text.slice(0, 80) + "...";
    }
    return newFormat;
  };

  return (
    <>
      {dataNews.map((item) => (
        <Item key={item._id}>
          <ImageWrapper>
            <img src={item.imgUrl} alt={item.title} />
          </ImageWrapper>
          <TextContent>
            <NewsTitle>{item.title}</NewsTitle>
            <NewsBody>{formattingText(item.text)}</NewsBody>

            <BottomWrapper>
              <NewsDate>{formatDate(item.date)}</NewsDate>
              <NewsLink href={item.url} target="_blank" rel="noreferrer">
                Read more
              </NewsLink>
            </BottomWrapper>
          </TextContent>
        </Item>
      ))}
    </>
  );
};

NewsItem.propTypes = {
  dataNews: PropTypes.array,
};
