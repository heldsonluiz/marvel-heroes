import {
  HomeContainer,
  HomeContent,
  OrderAndFilterContainer,
  OrderControllerContainer,
  ResultsFound,
  SortingContainer,
} from "./styles";

import heroiIcon from "../../assets/ic_heroi.svg";

import { useCallback, useContext, useEffect, useState } from "react";
import { api, authenticate } from "../../services/api";

import { HeroProps } from "../../components/Hero";
import { HeroList } from "../../components/HeroList";
import { Loading } from "../../components/Loading";

import { FavoriteIcon } from "../../components/FavoriteIcon";
import { HomeHeader } from "../../components/HomeHeader";
import { SearchBar } from "../../components/SearchBar";
import { ToggleIcon } from "../../components/ToggleIcon";
import { SearchContext } from "../../contexts/SearchContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { FavoriteHeroesContext } from "../../contexts/FavoriteHeroesContext";

export function Home() {
  const { heroName } = useContext(SearchContext);
  const { isLoading, setLoading } = useContext(LoadingContext);
  const { favoritesHeroes } = useContext(FavoriteHeroesContext);

  const [heroes, setHeroes] = useState<HeroProps[]>([]);
  const [orderAZ, setOrderAZ] = useState(true);
  const [totalHeroes, setTotalHeroes] = useState(0);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const requestCharacters = useCallback(async () => {
    try {
      const searchForName = heroName ? `nameStartsWith=${heroName}` : "";
      const orderByName = orderAZ ? `&orderBy=name` : "&orderBy=-name";

      const { data } = await api.get(
        `/characters?${searchForName}${orderByName}${authenticate()}&limit=20`
      );

      setHeroes(data.data.results);
      setTotalHeroes(data.data.total);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [heroName, orderAZ]);

  const onChangeOrderAZ = () => {
    setLoading(true);
    setOrderAZ((orderAZ) => (orderAZ = !orderAZ));
  };

  const onFilterFavorites = () => {
    setShowOnlyFavorites(
      (showOnlyFavorites) => (showOnlyFavorites = !showOnlyFavorites)
    );
  };

  const filteredHeroList: HeroProps[] = showOnlyFavorites
    ? favoritesHeroes
    : heroes;

  useEffect(() => {
    requestCharacters();
  }, [orderAZ, requestCharacters]);

  return (
    <HomeContainer>
      <HomeHeader />

      <SearchBar />

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
            <HeroList heroes={filteredHeroList} />
          </>
        )}
      </HomeContent>
    </HomeContainer>
  );
}
