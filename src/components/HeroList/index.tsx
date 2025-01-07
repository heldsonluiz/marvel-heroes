import { Hero, HeroProps } from "../Hero";
import { HeroListContainer } from "./styles";

type Props = {
  heroes: HeroProps[];
};

export function HeroList ({ heroes }: Props) {
  return (
    <HeroListContainer>
      {heroes.map((hero) => <Hero key={hero.id} hero={hero} />)}
    </HeroListContainer>
  );
}
