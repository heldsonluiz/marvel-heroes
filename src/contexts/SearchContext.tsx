import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchContextType {
  heroName: string;
  updateSearchTerm: (term: string) => void;
}
export const SearchContext = createContext({} as SearchContextType);

interface SearchContextProviderProps {
  children: ReactNode;
}
export function SearchContextProvider ({
  children
}: SearchContextProviderProps) {
  const [heroName, setHeroName] = useState("");
  const navigate = useNavigate();

  const updateSearchTerm = (term: string) => {
    setTimeout(()=>{
      navigate("/")
    }, 550)
    setHeroName(term);
  };

  return (
    <SearchContext.Provider
      value={{
        heroName,
        updateSearchTerm
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
