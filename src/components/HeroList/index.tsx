import { Hero, HeroProps } from "../Hero";
import { HeroListContainer } from "./styles";

type Props = {
  heroes: HeroProps[];
};

export function HeroList({ heroes }: Props) {
  return (
    <HeroListContainer>
      {heroes.map((hero) => {
        return <Hero key={hero.id} hero={hero} />;
      })}
    </HeroListContainer>
  );
}
