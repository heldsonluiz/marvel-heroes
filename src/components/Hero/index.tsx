import {
  HeroContainer,
  FavoriteButtonContainer,
  HeroInfo,
  HeroThumbnail,
  FavoritedButtonContainer,
} from "./styles";
import { Link } from "react-router";

import { useState } from "react";

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
  onFavoriteHero: (id: number) => void;
};

export function Hero({ hero, onFavoriteHero }: Props) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavoriteHero = () => {
    setIsFavorite((isFavorite) => (isFavorite = !isFavorite));
    onFavoriteHero(hero.id);
  };

  return (
    <HeroContainer>
      <Link to={`/hero/${hero.id}`}>
        <HeroThumbnail>
          <img
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt=""
          />
        </HeroThumbnail>
      </Link>
      <HeroInfo>
        <Link to={`/hero/${hero.id}`}>
          <span>{hero.name}</span>
        </Link>
        {isFavorite ? (
          <FavoritedButtonContainer onClick={handleFavoriteHero} />
        ) : (
          <FavoriteButtonContainer onClick={handleFavoriteHero} />
        )}
      </HeroInfo>
    </HeroContainer>
  );
}
