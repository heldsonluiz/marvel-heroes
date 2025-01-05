import { HeaderContainer, HomeContainer, HomeContent } from "./styles";

import logo from "../../assets/logo.svg";

import { useState, useEffect } from "react";
import { api, authenticate } from "../../services/api";

import { HeroProps } from "../../components/Hero";
import { HeroList } from "../../components/HeroList";
import { Loading } from "../../components/Loading";

export function Home() {
  const [heroes, serHeroes] = useState<HeroProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const requestCharacters = async () => {
    try {
      const { data } = await api.get(`/characters?${authenticate()}`);

      serHeroes(data.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestCharacters();
  }, []);

  return (
    <HomeContainer>
      <HeaderContainer>
        <img src={logo} alt="" />
        <h1>Explore o universo</h1>
        <span>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </span>
      </HeaderContainer>
      {/* <div>Search</div> */}
      <div>{/* <div>controls</div> */}</div>
      <HomeContent>
        {isLoading ? <Loading /> : <HeroList heroes={heroes} />}
      </HomeContent>
    </HomeContainer>
  );
}
