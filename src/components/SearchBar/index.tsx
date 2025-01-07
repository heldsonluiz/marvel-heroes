import { ChangeEvent, useContext } from "react";
import {
  SearchContainer,
  LabelSearchContainer,
  SearchInputIcon,
  SearchInputContainer,
  SearchContainerForm
} from "./styles";
import { SearchContext } from "../../contexts/SearchContext";
import searchIcon from "../../assets/ic_busca.svg";

export function SearchBar () {
  const { heroName, updateSearchTerm, handleExecuteSearch } =
    useContext(SearchContext);

  const handleOnChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    updateSearchTerm(event.target.value);
  };

  const handleOnSubmitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleExecuteSearch();
  };

  return (
    <SearchContainer>
      <SearchContainerForm onSubmit={handleOnSubmitForm}>
        <LabelSearchContainer htmlFor="hero-name">
          <SearchInputIcon src={searchIcon} alt="" />
          <SearchInputContainer
            id="name"
            value={heroName}
            placeholder="Procure por heróis"
            onChange={handleOnChangeName}
          />
        </LabelSearchContainer>
      </SearchContainerForm>
    </SearchContainer>
  );
}
