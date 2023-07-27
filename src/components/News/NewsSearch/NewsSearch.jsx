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
} from "./NewsSearch.styled";

import { useSearchParams } from "react-router-dom";

export const NewsSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeSearchQuery = (e) => {
    const searchQuery = e.currentTarget.value.toLowerCase();
    setSearchParams({ query: searchQuery });
    setSearchQuery(searchQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setSearchParams();
      return;
    }

    setSearchQuery("");
  };
  const [searchParams, setSearchParams] = useSearchParams();

  searchParams.get("query") ?? "";

  const handleDelete = () => {
    setSearchQuery("");
    setSearchParams();
  };

  return (
    <Section>
      <TitleSearch>News</TitleSearch>
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
