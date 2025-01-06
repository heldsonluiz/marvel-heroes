import { createContext, ReactNode, useState } from "react";

interface SearchContextType {
  heroName: string;
  updateSearchTerm: (term: string) => void;
}
export const SearchContext = createContext({} as SearchContextType);

interface SearchContextProviderProps {
  children: ReactNode;
}
export function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [heroName, setHeroName] = useState("");

  const updateSearchTerm = (term: string) => {
    setHeroName(term);
  };

  return (
    <SearchContext.Provider
      value={{
        heroName,
        updateSearchTerm,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
