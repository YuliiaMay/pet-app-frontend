// import defaultPoster from "../images/CardsImage/defaultPoster.jpeg";

const checkPosterNews = (img, error) => {
  if (!error) return img;

  return "https://loremflickr.com/640/360";
};
export default checkPosterNews;
