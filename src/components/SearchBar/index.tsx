import { ChangeEvent, useContext } from "react";
import {
  SearchContainer,
  LabelSearchContainer,
  SearchInputIcon,
  SearchInputContainer,
} from "./styles";
import { SearchContext } from "../../contexts/SearchContext";
import searchIcon from "../../assets/ic_busca.svg";

export function SearchBar() {
  const { heroName, updateSearchTerm } = useContext(SearchContext);

  const handleOnChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    updateSearchTerm(event.target.value);
  };

  return (
    <SearchContainer>
      <form>
        <LabelSearchContainer htmlFor="hero-name">
          <SearchInputIcon src={searchIcon} alt="" />
          <SearchInputContainer
            id="name"
            value={heroName}
            placeholder="Procure por heróis"
            onChange={handleOnChangeName}
          />
        </LabelSearchContainer>
      </form>
    </SearchContainer>
  );
}
