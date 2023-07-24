import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiX } from "react-icons/fi";

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

  //* Значення інпута записуємо в стейт
  const handleChangeSearchQuery = (e) => {
    const searchQuery = e.currentTarget.value.toLowerCase();
    setSearchQuery(searchQuery);
  };

  //*  Передаємо в App значення searchQuery і очищуємо форму
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      return;
    }
    // onSubmit(searchQuery);
    setSearchQuery("");
  };

  const handleDelete = () => {
    setSearchQuery("");
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
          <BsSearch color={"#54ADFF"} size={24} />
        </ButtonSearch>
        {searchQuery !== "" && (
          <ButtonClose type="button" onClick={handleDelete}>
            <FiX color={"#FFC107"} size={24} />
          </ButtonClose>
        )}
      </FormSearch>
    </Section>
  );
};
