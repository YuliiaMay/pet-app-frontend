import { Title, NewsWrapper } from "./NewsPage.styled";
import NewsList from "../../components/News/NewsList/NewsList";
const NewsPage = () => {
  return (
    <>
      <NewsWrapper>
        <Title>News</Title>
        <NewsList />
      </NewsWrapper>
    </>
  );
};

export default NewsPage;
