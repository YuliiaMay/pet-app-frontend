import { NoticesSearch } from "../../components/Notices/NoticesSearch/NoticesSearch";
import { NoticesFilters } from "../../components/Notices/NoticesFilters/NoticesFilters";
import { NoticesSearchTitle } from "../../components/Notices/NoticesSearchTitle/NoticesSearchTitle";

const NoticesPage = () => {
  return (
    <>
      <NoticesSearchTitle />
      <NoticesSearch />
      <NoticesFilters />
    </>
  );
};

export default NoticesPage;
