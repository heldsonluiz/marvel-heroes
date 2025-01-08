import {
  HomeContainer,
  HomeContent,
  OrderAndFilterContainer,
  OrderControllerContainer,
  PaginationContainer,
  PaginationLinks,
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

  const limit = 20

  const [currentPage, setCurrentPage] = useState(78)
  const [totalPages, setTotalPages] = useState(0)

  const [sortedHeroes, setSortedHeroes] = useState<HeroProps[]>([])

  const requestCharacters = useCallback(async () => {
    try {
      setLoading(true);

      const searchForName = heroName ? `nameStartsWith=${encodeURIComponent(heroName)}` : "";
      const orderByName = orderAZ ? `&orderBy=name` : "&orderBy=-name";
      const offSetValue = `&offset=${limit * (currentPage - 1)}`

      const { data } = await api.get(
        `/characters?${searchForName}${orderByName}${offSetValue}${authenticate()}&limit=20`
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
  }, [orderAZ, searchTerm, currentPage]);

  const onChangeOrderAZ = () => {
    setLoading(true);
    setOrderAZ((orderAZ) => (orderAZ = !orderAZ));
  };

  const onFilterFavorites = () => {
    setCurrentPage(1)
    setSearchTerm("")
    setShowOnlyFavorites(
      (showOnlyFavorites) => (showOnlyFavorites = !showOnlyFavorites)
    );
  };

  const goToNextPage = () => {
    if ((currentPage + 1) > totalPages) return
    setCurrentPage((currentPage) => currentPage + 1)
  }

  const goToPrevPage = () => {
    if ((currentPage - 1) < 1) return
    setCurrentPage((currentPage) => currentPage -1)
  }

  const filteredHeroList: HeroProps[] = showOnlyFavorites
    ? sortedHeroes
    : heroes;

  const filteredTotalHeroes = showOnlyFavorites
    ? filteredHeroList.length
    : totalHeroes;

  const disableNextLink = (currentPage + 1) > totalPages
  const disablePrevLink = (currentPage - 1) <= 0

  useEffect(() => {
    setCurrentPage(1)
    let newHeroList:HeroProps[] = []

    if (!orderAZ) newHeroList = favoritesHeroes.sort((a, b) => b.name.localeCompare(a.name))
    else newHeroList = favoritesHeroes.sort((a, b) => a.name.localeCompare(b.name))

    if (heroName.trim().length) newHeroList = newHeroList.filter(hero => hero.name.toLowerCase().includes(heroName.toLowerCase()) )

    setSortedHeroes(newHeroList)
  },[orderAZ, showOnlyFavorites, heroName])

  useEffect(() => {
    requestCharacters();
  }, [orderAZ, requestCharacters]);

  useEffect(() => {
    const totalPages = Math.ceil(totalHeroes / limit)
    setTotalPages(totalPages)
  }, [totalHeroes])

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

        {
          !showOnlyFavorites &&
          <PaginationContainer>
            <PaginationLinks onClick={goToPrevPage} $disabled={disablePrevLink}>&lt;&lt;</PaginationLinks>
            <span>Página {currentPage} de {totalPages}</span>
            <PaginationLinks onClick={goToNextPage} $disabled={disableNextLink}>&gt;&gt;</PaginationLinks>
          </PaginationContainer>
        }
      </HomeContent>
    </HomeContainer>
  );
}
