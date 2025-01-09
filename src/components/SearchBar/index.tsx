import { ChangeEvent, FormEvent, useContext } from "react";
import {
  SearchContainer,
  LabelSearchContainer,
  SearchInputIcon,
  SearchInputContainer,
  SearchContainerForm,
  ClearSearchInputIcon
} from "./styles";
import { SearchContext } from "../../contexts/SearchContext";
import searchIcon from "../../assets/ic_busca.svg";

export function SearchBar () {
  const { searchValue, updateSearchValue } =
    useContext(SearchContext);

  const handleOnChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleClearSearchValue = () => {
    if (searchValue) updateSearchValue("")
  }

  return (
    <SearchContainer data-testid="search-container">
      <SearchContainerForm data-testid="search-form" onSubmit={handleFormSubmit}>
        <LabelSearchContainer htmlFor="hero-name">
          <SearchInputIcon src={searchIcon} alt="" data-testid="search-input-icon"/>
          <SearchInputContainer
            id="name"
            value={searchValue}
            placeholder="Procure por heróis"
            onChange={handleOnChangeValue}
            data-testid="search-input"
          />
          <ClearSearchInputIcon onClick={handleClearSearchValue} data-testid="clear-input-icon">X</ClearSearchInputIcon>
        </LabelSearchContainer>
      </SearchContainerForm>
      <span data-testid="search-tip">* Busque por heróis que iniciam com o nome digitado, incluindo caracteres especiais</span>
    </SearchContainer>
  );
}
