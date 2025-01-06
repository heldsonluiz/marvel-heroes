import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { SearchContextProvider } from "./contexts/SearchContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { LoadingContextProvider } from "./contexts/LoadingContext";
import { FavoriteHeroesContextProvider } from "./contexts/FavoriteHeroesContext";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <LoadingContextProvider>
            <SearchContextProvider>
              <FavoriteHeroesContextProvider>
                <Router />
              </FavoriteHeroesContextProvider>
            </SearchContextProvider>
          </LoadingContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
