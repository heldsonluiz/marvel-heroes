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
  const { heroName, updateSearchTerm } =
    useContext(SearchContext);

  const handleOnChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    updateSearchTerm(event.target.value);
  };

  return (
    <SearchContainer data-testid="search-container">
      <SearchContainerForm data-testid="search-form">
        <LabelSearchContainer htmlFor="hero-name">
          <SearchInputIcon src={searchIcon} alt="" data-testid="search-input-icon"/>
          <SearchInputContainer
            id="name"
            value={heroName}
            placeholder="Procure por heróis"
            onChange={handleOnChangeName}
            data-testid="search-input"
          />
        </LabelSearchContainer>
      </SearchContainerForm>
      <span data-testid="search-tip">* Busque por heróis que iniciam com o nome digitado, incluindo caracteres especiais</span>
    </SearchContainer>
  );
}
