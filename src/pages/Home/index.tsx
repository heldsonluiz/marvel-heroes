import {
  HomeContainer,
  HomeContent,
  OrderAndFilterContainer,
  OrderControllerContainer,
  ResultsFound,
  SortingContainer
} from "./styles";

import heroiIcon from "../../assets/ic_heroi.svg";

import { debounce } from "lodash"

import { useCallback, useContext, useEffect, useRef, useState } from "react";
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

export function Home () {
  const { heroName } = useContext(SearchContext);
  const { isLoading, setLoading } = useContext(LoadingContext);
  const { favoritesHeroes } = useContext(FavoriteHeroesContext);

  const [heroes, setHeroes] = useState<HeroProps[]>([]);
  const [orderAZ, setOrderAZ] = useState(true);
  const [totalHeroes, setTotalHeroes] = useState(0);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")

  const requestCharacters = useCallback(async () => {

    try {
      setLoading(true);
      const searchForName = heroName ? `nameStartsWith=${encodeURIComponent(heroName)}` : "";
      const orderByName = orderAZ ? `&orderBy=name` : "&orderBy=-name";


      const { data } = await api.get(
        `/characters?${searchForName}${orderByName}${authenticate()}&limit=20`
      );

      setHeroes(data.data.results);
      setTotalHeroes(data.data.total);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setHeroes([]);
      setTotalHeroes(0);
      console.log(error);
    }
  }, [orderAZ, searchTerm]);

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
    ? heroName
      ? favoritesHeroes.filter(hero => hero.name.toLowerCase().includes(heroName.toLowerCase()) )
      : favoritesHeroes
    : heroes;

  const filteredTotalHeroes = showOnlyFavorites
    ? filteredHeroList.length
    : totalHeroes;

  useEffect(() => {
    requestCharacters();
  }, [orderAZ, requestCharacters]);


  const refValue = useRef(searchTerm);
  const lazyLog = useCallback(
    debounce(() => {
      setSearchTerm(refValue.current)
    }, 500),
    []
  );

  useEffect(() => {
    refValue.current = heroName;
    lazyLog();
  }, [heroName]);


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
                : `Encontrados ${filteredTotalHeroes} heróis`}
            </span>
          </ResultsFound>

          <OrderAndFilterContainer>
            <OrderControllerContainer>
              <img src={heroiIcon} alt="" />
              <span>Ordenar por nome - A/Z</span>
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
