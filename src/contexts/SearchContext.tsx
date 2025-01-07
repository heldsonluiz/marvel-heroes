import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchContextType {
  heroName: string;
  executeSearch: boolean;
  updateSearchTerm: (term: string) => void;
  handleExecuteSearch: () => void;
}
export const SearchContext = createContext({} as SearchContextType);

interface SearchContextProviderProps {
  children: ReactNode;
}
export function SearchContextProvider ({
  children
}: SearchContextProviderProps) {
  const [heroName, setHeroName] = useState("");
  const [executeSearch, setExecuteSearch] = useState(false);
  const navigate = useNavigate();

  const handleExecuteSearch = () => {
    setExecuteSearch(true);
    setTimeout(function () {
      setExecuteSearch(false);
      navigate("/");
    }, 100);
  };

  const updateSearchTerm = (term: string) => {
    setHeroName(term);
  };

  return (
    <SearchContext.Provider
      value={{
        heroName,
        executeSearch,
        updateSearchTerm,
        handleExecuteSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
