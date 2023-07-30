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
} from "./NewsSearch.styled";

export const NewsSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [CurrentPathname, setCurrentPathname] = useState("");
  const location = useLocation();

  //* Значення інпута записуємо в стейт
  const handleChangeSearchQuery = (e) => {
    const searchQuery = e.currentTarget.value.toLowerCase();

    setSearchQuery(searchQuery);
  };

  //*  Передаємо в App значення searchQuery і очищуємо форму
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      // setSearchParams();
      return;
    }

    setSearchParams({ query: searchQuery });
    setSearchQuery(searchQuery);
    // onSubmit(searchQuery);
    // setSearchQuery("");
  };

  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("query") ?? "";

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
      <TitleSearch>News</TitleSearch>
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
