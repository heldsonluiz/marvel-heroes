import {
  HeaderContainer,
  HomeContainer,
  HomeContent,
  LabelSearchContainer,
  OrderAndFilterContainer,
  OrderControllerContainer,
  ResultsFound,
  SearchContainer,
  SearchInputContainer,
  SearchInputIcon,
  SortingContainer,
} from "./styles";

import logo from "../../assets/logo.svg";
import heroiIcon from "../../assets/ic_heroi.svg";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { api, authenticate } from "../../services/api";

import { HeroProps } from "../../components/Hero";
import { HeroList } from "../../components/HeroList";
import { Loading } from "../../components/Loading";

import searchIcon from "../../assets/ic_busca.svg";
import { ToggleIcon } from "../../components/ToggleIcon";
import { FavoriteIcon } from "../../components/FavoriteIcon";

export function Home() {
  const [heroes, setHeroes] = useState<HeroProps[]>([]);

  const [heroName, setHeroName] = useState("");
  const [orderAZ, setOrderAZ] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const [totalHeroes, setTotalHeroes] = useState(0);

  // const [favoritesHeroes, setFavoriteHeroes] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const requestCharacters = async () => {
    try {
      const searchForName = heroName ? `nameStartsWith=${heroName}` : "";
      const orderByName = orderAZ ? `&orderBy=name` : "&orderBy=-name";

      const { data } = await api.get(
        `/characters?${searchForName}${orderByName}${authenticate()}&limit=20`
      );

      setHeroes(data.data.results);
      setTotalHeroes(data.data.total);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    requestCharacters();
  };

  const handleOnChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setHeroName(event.target.value);
  };

  const onChangeOrderAZ = () => {
    setIsLoading(true);
    setOrderAZ((orderAZ) => (orderAZ = !orderAZ));
  };

  const onFilterFavorites = () => {
    setShowOnlyFavorites(
      (showOnlyFavorites) => (showOnlyFavorites = !showOnlyFavorites)
    );
    console.log("filtrando favoritos");
  };

  useEffect(() => {
    requestCharacters();
  }, [orderAZ]);

  return (
    <HomeContainer>
      <HeaderContainer>
        <img src={logo} alt="" />
        <h1>Explore o universo</h1>
        <span>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </span>
      </HeaderContainer>
      <SearchContainer>
        <form onSubmit={handleOnSubmitForm}>
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

      <HomeContent>
        <SortingContainer>
          <ResultsFound>
            <span>
              {isLoading
                ? "Buscando heróis"
                : `Encontrados ${totalHeroes} heróis`}
            </span>
          </ResultsFound>

          <OrderAndFilterContainer>
            <OrderControllerContainer>
              <img src={heroiIcon} alt="" />
              Ordenar por nome - A/Z
              <ToggleIcon
                active={orderAZ}
                onToggleChange={onChangeOrderAZ}
                loading={isLoading}
              />
            </OrderControllerContainer>

            <FavoriteIcon
              onClickAction={onFilterFavorites}
              active={showOnlyFavorites}
              loading={isLoading}
              label={"Somente favoritos"}
            />
          </OrderAndFilterContainer>
        </SortingContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <HeroList heroes={heroes} />
          </>
        )}
      </HomeContent>
    </HomeContainer>
  );
}
