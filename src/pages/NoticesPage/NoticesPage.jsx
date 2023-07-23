import { NoticesSearch } from "../../components/Notices/NoticesSearch/NoticesSearch";
import { NoticesFilters } from "../../components/Notices/NoticesFilters/NoticesFilters";
import { NoticesPetCardList } from "../../components/Notices/NoticesPetsCardList/NoticesPetCard";

const NoticesPage = () => {
  return (
    <>
      <NoticesSearch />
      <NoticesFilters />
      <NoticesPetCardList />
    </>
  );
};

export default NoticesPage;
