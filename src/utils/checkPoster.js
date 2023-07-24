import defaultPoster from "../images/CardsImage/defaultPoster.jpeg";

const checkPoster = (img) => {
  if (!img) {
    return defaultPoster;
  }
  return img;
};

export default checkPoster;
