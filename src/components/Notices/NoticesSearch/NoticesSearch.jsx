import { useState } from "react";
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

import { useSearchParams } from "react-router-dom";

export const NoticesSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  //* Значення інпута записуємо в стейт
  const handleChangeSearchQuery = (e) => {
    const searchQuery = e.currentTarget.value.toLowerCase();
    setSearchParams({ query: searchQuery });
    setSearchQuery(searchQuery);
  };

  //*  Передаємо в App значення searchQuery і очищуємо форму
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setSearchParams();
      return;
    }

    // onSubmit(searchQuery);
    setSearchQuery("");
  };
  const [searchParams, setSearchParams] = useSearchParams();

  const queryMovies = searchParams.get("query") ?? "";

  const handleDelete = () => {
    setSearchQuery("");
    setSearchParams();
  };

  return (
    <Section>
      <TitleSearch>Find your favorite pet</TitleSearch>
      <FormSearch onSubmit={handleSubmit}>
        <InputSearch
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChangeSearchQuery}
        />
        <ButtonSearch type="submit" position={searchQuery}>
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
