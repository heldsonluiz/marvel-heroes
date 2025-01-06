import { createContext, ReactNode, useState } from "react";

interface LoadingContextProps {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}
export const LoadingContext = createContext({} as LoadingContextProps);

interface LoadingContextProviderProps {
  children: ReactNode;
}
export function LoadingContextProvider({
  children,
}: LoadingContextProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const setLoading = (value: boolean) => {
    setIsLoading(value);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
