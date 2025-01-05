import { Hero, HeroProps } from "../Hero";
import { HeroListContainer } from "./styles";

type Props = {
  heroes: HeroProps[];
};

export function HeroList({ heroes }: Props) {
  const favoriteHero = (heroId: number) => {
    console.log(heroId);
  };

  return (
    <HeroListContainer>
      {heroes.map((hero) => {
        return <Hero key={hero.id} hero={hero} onFavoriteHero={favoriteHero} />;
      })}
    </HeroListContainer>
  );
}
