import { NoticesSearch } from "../../components/Notices/NoticesSearch/NoticesSearch";
import { NoticesFilters } from "../../components/Notices/NoticesFilters/NoticesFilters";
 import { NoticesSearchTitle } from "../../components/Notices/NoticesSearchTitle/NoticesSearchTitle";
// import NoticesCategoriesList from "../../components/Notices/NoticesCategoriesList/NoticesCategoriesList";


const NoticesPage = () => {


  return (
    <>
    <NoticesSearchTitle/>
      <NoticesSearch />
      <NoticesFilters />
      {/* <NoticesCategoriesList /> */}
    </>
  );
};

export default NoticesPage;
