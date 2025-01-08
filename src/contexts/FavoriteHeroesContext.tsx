import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
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
    const sessionItemsStr = sessionStorage.getItem('favoriteHeroesStored') || ""
    const heroList: HeroProps[]= JSON.parse(sessionItemsStr);

    setFavoriteHeroes((favoriteHeroes) => {
      if (favoritesHeroes.length < 5) {
        const updatedFavoriteHeroes = [...favoriteHeroes, hero]

        if (heroList.findIndex(h => h.id === hero.id) < 0) {
          const favoriteHerosArray = JSON.stringify(updatedFavoriteHeroes)
          sessionStorage.setItem('favoriteHeroesStored', favoriteHerosArray);
        }

        return updatedFavoriteHeroes
      }
      else return favoriteHeroes
    });

  };

  const removeHeroAsFavorite = (hero: HeroProps) => {
    const newFavoriteHeroes = favoritesHeroes.filter((h) => h.id !== hero.id);
    const favoriteHerosArray = JSON.stringify(newFavoriteHeroes)
    sessionStorage.setItem('favoriteHeroesStored', favoriteHerosArray);
    setFavoriteHeroes([...newFavoriteHeroes]);
  };

  const addHeroListAsFavorites= (heroList: HeroProps[]) => {
    if (favoritesHeroes.length < 5) {
      heroList.forEach(hero => {
        addHeroAsFavorite(hero)
      })
    }
  }

  const setFavoritesFromStorage = useCallback(() => {
    const str = sessionStorage.getItem('favoriteHeroesStored') || ""
    if (!str?.length) {
      const favoriteHerosArray = JSON.stringify([])
      sessionStorage.setItem('favoriteHeroesStored', favoriteHerosArray);
    } else {
      const heroList: HeroProps[] = JSON.parse(str);
      addHeroListAsFavorites(heroList)
    }
  },[])

  useEffect(() => {
    setFavoritesFromStorage()
  },[])

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
