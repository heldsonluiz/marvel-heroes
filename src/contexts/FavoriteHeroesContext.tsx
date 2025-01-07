import { createContext, ReactNode, useState } from "react";
import { HeroProps } from "../components/Hero";

interface FavoriteHeroesContextProps {
  favoritesHeroes: HeroProps[];
  addHeroAsFavorite: (hero: HeroProps) => void;
  removeHeroAsFavorite: (hero: HeroProps) => void;
}

export const FavoriteHeroesContext = createContext(
  {} as FavoriteHeroesContextProps
);

interface FavoriteHeroesContextProviderProps {
  children: ReactNode;
}

export function FavoriteHeroesContextProvider ({
  children
}: FavoriteHeroesContextProviderProps) {
  const [favoritesHeroes, setFavoriteHeroes] = useState<HeroProps[]>([]);

  const addHeroAsFavorite = (hero: HeroProps) => {
    if (favoritesHeroes.length < 5) {
      setFavoriteHeroes([...favoritesHeroes, hero]);
    }
  };

  const removeHeroAsFavorite = (hero: HeroProps) => {
    const newFavoriteHeroes = favoritesHeroes.filter((h) => h.id !== hero.id);
    setFavoriteHeroes([...newFavoriteHeroes]);
  };

  return (
    <FavoriteHeroesContext.Provider
      value={{
        favoritesHeroes,
        addHeroAsFavorite,
        removeHeroAsFavorite
      }}
    >
      {children}
    </FavoriteHeroesContext.Provider>
  );
}
