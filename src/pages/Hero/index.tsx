import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router";
import { api, authenticate } from "../../services/api";
import {
  HeroContainer,
  HeroData,
  HeroDetails,
  HeroInfoContainer,
  HeroLastComic,
  HeroLastComics,
  HeroInfo,
  DataDiv,
  DataDetails,
  ComicsGrid,
  ComicsGridItem,
  HeroHeader,
  HeroDetailHeader
} from "./styles";

import logoImage from "../../assets/logo_menor.svg";

import comicsIcon from "../../assets/ic_quadrinhos.svg";
import moviesIcon from "../../assets/ic_trailer.svg";

import { HeroThumbnail } from "./styles";
import { SearchBar } from "../../components/SearchBar";
import { LoadingContext } from "../../contexts/LoadingContext";
import { Loading } from "../../components/Loading";
import { FavoriteIcon } from "../../components/FavoriteIcon";
import { FavoriteHeroesContext } from "../../contexts/FavoriteHeroesContext";
interface HeroProps {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
  stories: {
    available: number;
  };
}

interface ComicProps {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  dates: {
    [index: string]: {
      date: string;
    };
  };
}

export function Hero () {
  const { heroId } = useParams();
  const [hero, setHero] = useState<HeroProps>();
  const [lastComics, setLastComics] = useState<ComicProps[]>([]);
  const { isLoading, setLoading } = useContext(LoadingContext);

  const { favoritesHeroes, addHeroAsFavorite, removeHeroAsFavorite } =
    useContext(FavoriteHeroesContext);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const hanleOnFavoriteChange = () => {
    if (!hero) return;

    if (isFavorite) removeHeroAsFavorite(hero);
    else addHeroAsFavorite(hero);

    setIsFavorite((isFavorite) => isFavorite ? false : favoritesHeroes.length < 5);
  };

  const fetchHero = async () => {
    try {
      const { data } = await api.get(`/characters/${heroId}?${authenticate()}`);
      setHero(data.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLastComics = async () => {
    try {
      const { data } = await api.get(
        `/characters/${heroId}/comics?orderBy=-onsaleDate&limit=10?${authenticate()}`
      );
      setLastComics(data.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (heroId) {
      fetchHero();
      fetchLastComics();
    }
  }, [heroId]);

  useEffect(() => {
    if (hero && favoritesHeroes.findIndex((f) => f.id === hero.id) >= 0)
      setIsFavorite(true);
  }, [favoritesHeroes, hero]);

  const heroThumbnail = hero
    ? `${hero.thumbnail.path}.${hero.thumbnail.extension}`
    : "https://github.com/heldsonluiz.jpg";

  const lastComicDate = lastComics.length
    ? new Date(lastComics[0].dates[0].date).toLocaleDateString("pt-BR")
    : "";

  return (
    <HeroContainer>
      <HeroHeader>
        <Link to="/">
          <img src={logoImage} alt="" />
        </Link>
        <SearchBar />
      </HeroHeader>
      {!isLoading && hero ? (
        <HeroInfoContainer>
          <HeroInfo>
            <HeroDetails>
              <HeroDetailHeader>
                <FavoriteIcon
                  active={isFavorite}
                  loading={false}
                  onClickAction={hanleOnFavoriteChange}
                />
                <h1>{hero.name}</h1>
              </HeroDetailHeader>
              <p>{hero.description}</p>
              <HeroData>
                <DataDiv>
                  <h3>Quadrinhos</h3>
                  <DataDetails>
                    <img src={comicsIcon} alt="" />
                    <span>{hero.comics.available}</span>
                  </DataDetails>
                </DataDiv>
                <DataDiv>
                  <h3>Filmes</h3>
                  <DataDetails>
                    <img src={moviesIcon} alt="" />
                    <span>{hero.stories.available}</span>
                  </DataDetails>
                </DataDiv>
              </HeroData>
              <HeroLastComic>
                Último quadrinho: <span>{lastComicDate}</span>
              </HeroLastComic>
            </HeroDetails>

            <HeroThumbnail>
              <img src={heroThumbnail} alt="" />
            </HeroThumbnail>
          </HeroInfo>
          <HeroLastComics>
            <h2>Últimos Lançamentos</h2>
            <ComicsGrid>
              {lastComics.map((comic) => (
                  <ComicsGridItem key={comic.id}>
                    <img
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt=""
                    />
                    <span>{comic.title}</span>
                  </ComicsGridItem>
                ))}
            </ComicsGrid>
          </HeroLastComics>
        </HeroInfoContainer>
      ) : (
        <Loading />
      )}
    </HeroContainer>
  );
}
