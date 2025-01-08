import { Hero, HeroProps } from "../Hero";
import { HeroListContainer } from "./styles";

type Props = {
  heroes: HeroProps[];
};

export function HeroList ({ heroes }: Props) {
  return (
    <HeroListContainer data-testid="herolist-container">
      {heroes.map((hero) => <Hero key={hero.id} hero={hero} data-testid="hero-container"/>)}
    </HeroListContainer>
  );
}
