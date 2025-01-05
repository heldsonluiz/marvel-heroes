import { HomeContainer } from "./styles";

import { HeroProps } from "../../components/Hero";
import { HeroList } from "../../components/HeroList";

const mockProps: HeroProps[] = [
  {
    id: 1011334,
    name: "3-D Man",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
  },
  {
    id: 1011332,
    name: "3-D Man",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
  },
];

export function Home() {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <HeroList heroes={mockProps} />
    </HomeContainer>
  );
}
