import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";

interface SearchContextType {
  searchValue: string;
  searchTerm: string;
  updateSearchValue: (term: string) => void;
}
export const SearchContext = createContext({} as SearchContextType);

interface SearchContextProviderProps {
  children: ReactNode;
}
export function SearchContextProvider ({
  children
}: SearchContextProviderProps) {
  const [searchValue, setSeachValue] = useState("");
  const searchTerm = useDebounce(searchValue)

  const navigate = useNavigate();

  const updateSearchValue = (term: string) => {
    setTimeout(()=>{
      navigate("/")
    }, 1500)
    setSeachValue(term)
  };

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        searchTerm,
        updateSearchValue
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
