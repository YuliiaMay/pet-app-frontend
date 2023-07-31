import formatDate from "../../../utils/formatDate";
import { useState } from "react";
import PropTypes from "prop-types";
import { checkPosterNews, formattingTextNews } from "../../../utils";
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

export const NewsItem = (item) => {
  const [errorUrl, setErrorUrl] = useState(false);
  if (!item) return;

  const handleImageError = () => {
    setErrorUrl(true);
  };

  return (
    <>
      <Item key={item._id}>
        <ImageWrapper>
          <img
            onError={handleImageError}
            src={checkPosterNews(item.imgUrl, errorUrl)}
            alt={item.title}
          />
        </ImageWrapper>
        <TextContent>
          <NewsTitle>{item.title}</NewsTitle>
          <NewsBody>{formattingTextNews(item.text)}</NewsBody>

          <BottomWrapper>
            <NewsDate>{formatDate(item.date)}</NewsDate>
            <NewsLink href={item.url} target="_blank" rel="noreferrer">
              Read more
            </NewsLink>
          </BottomWrapper>
        </TextContent>
      </Item>
    </>
  );
};

NewsItem.propTypes = {
  dataNews: PropTypes.array,
};
