import { HeroContainer, HeroInfo, HeroThumbnail } from "./styles";
import { Link } from "react-router";

import { useContext, useEffect, useState } from "react";
import { FavoriteIcon } from "../FavoriteIcon";
import { FavoriteHeroesContext } from "../../contexts/FavoriteHeroesContext";

export type HeroProps = {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

type Props = {
  hero: HeroProps;
};

export function Hero ({ hero }: Props) {
  const { favoritesHeroes, addHeroAsFavorite, removeHeroAsFavorite } =
    useContext(FavoriteHeroesContext);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const hanleOnFavoriteChange = () => {
    if (isFavorite) removeHeroAsFavorite(hero);
    else addHeroAsFavorite(hero);

    setIsFavorite((isFavorite) => isFavorite ? false : favoritesHeroes.length < 5);
  };

  useEffect(() => {
    if (favoritesHeroes.findIndex((f) => f.id === hero.id) >= 0)
      setIsFavorite(true);
  }, [favoritesHeroes, hero.id]);

  return (
    <HeroContainer>
      <Link to={`/hero/${hero.id}`}>
        <HeroThumbnail>
          <img
            data-testid="hero-thumbnail"
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt=""
          />
        </HeroThumbnail>
      </Link>
      <HeroInfo>
        <Link to={`/hero/${hero.id}`}>
          <span>{hero.name}</span>
        </Link>
        <FavoriteIcon
          active={isFavorite}
          loading={false}
          onClickAction={hanleOnFavoriteChange}
        />
      </HeroInfo>
    </HeroContainer>
  );
}
