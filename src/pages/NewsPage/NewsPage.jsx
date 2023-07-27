import { NewsWrapper } from "./NewsPage.styled";
import NewsList from "../../components/News/NewsList/NewsList";
import { NewsSearch } from "../../components/News/NewsSearch/NewsSearch";
const NewsPage = () => {
  return (
    <>
      <NewsWrapper>
        <NewsSearch/>
        <NewsList />
      </NewsWrapper>
    </>
  );
};

export default NewsPage;
