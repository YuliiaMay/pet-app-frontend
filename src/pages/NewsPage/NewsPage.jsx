import { NewsWrapper } from "./NewsPage.styled";
import NewsList from "../../components/News/NewsList/NewsList";
import { NewsSearch } from "../../components/News/NewsSearch/NewsSearch";
import { NewsSearchTitle } from "../../components/News/NewsSearchTitle/NewsSearchTitle";
const NewsPage = () => {
  return (
    <>
      <NewsWrapper>
        <NewsSearchTitle/>
        <NewsSearch/>
        <NewsList />
      </NewsWrapper>
    </>
  );
};

export default NewsPage;
