import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { ReactComponent as Search } from "../../../images/Icon/Search.svg";
import { ReactComponent as Cross } from "../../../images/Icon/Cross.svg";

import {
  ButtonClose,
  ButtonSearch,
  FormSearch,
  InputSearch,
  Section,
  TitleSearch,
} from "./NoticesSearch.style";

export const NoticesSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [CurrentPathname, setCurrentPathname] = useState("");
  const location = useLocation();

  const handleChangeSearchQuery = (e) => {
    const searchQuery = e.currentTarget.value.toLowerCase();

    setSearchQuery(searchQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      // setSearchParams();
      return;
    }

    setSearchParams({ search: searchQuery });
    setSearchQuery(searchQuery);
    // onSubmit(searchQuery);
    // setSearchQuery("");
  };

  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("search") ?? "";

  const handleDelete = () => {
    setSearchQuery("");
    setSearchParams();
    setCurrentPathname(location.pathname);
  };

  useEffect(() => {
    setCurrentPathname(location.pathname);

    if (CurrentPathname !== location.pathname) {
      setSearchQuery("");
    }
  }, [location.pathname, CurrentPathname, setSearchParams]);

  return (
    <Section>
      <TitleSearch>Find your favorite pet</TitleSearch>
      <FormSearch onSubmit={handleSubmit}>
        <InputSearch
          type="text"
          placeholder="Search"
          value={searchQuery}
          autoComplete="off"
          onChange={handleChangeSearchQuery}
        />
        <ButtonSearch
          type="submit"
          position={searchQuery}
          onSubmit={handleSubmit}
        >
          <Search />
        </ButtonSearch>
        {searchQuery !== "" && (
          <ButtonClose type="button" onClick={handleDelete}>
            <Cross />
          </ButtonClose>
        )}
      </FormSearch>
    </Section>
  );
};
