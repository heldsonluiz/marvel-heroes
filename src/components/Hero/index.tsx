import { HeroContainer, HeroInfo, HeroThumbnail } from "./styles";
import { Link } from "react-router";

import { useState } from "react";
import { FavoriteIcon } from "../FavoriteIcon";

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

  const hanleOnFavoriteChange = () => {
    onFavoriteHero(hero.id);
    setIsFavorite((isFavorite) => (isFavorite = !isFavorite));
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
        <FavoriteIcon
          active={isFavorite}
          loading={false}
          onClickAction={hanleOnFavoriteChange}
        />
      </HeroInfo>
    </HeroContainer>
  );
}
