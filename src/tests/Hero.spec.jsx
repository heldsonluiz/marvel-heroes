import { render, screen, fireEvent } from "@testing-library/react";
import { Hero } from "../components/Hero";
import { FavoriteHeroesContext } from "../contexts/FavoriteHeroesContext";
import { BrowserRouter as Router } from "react-router-dom";

const mockHero = {
  id: 1,
  name: "Spider-Man",
  thumbnail: {
    path: "http://example.com/spiderman",
    extension: "jpg",
  },
};

const renderWithContext = (ui, contextValue) => {
  return render(
    <FavoriteHeroesContext.Provider value={contextValue}>
      <Router>{ui}</Router>
    </FavoriteHeroesContext.Provider>
  );
};

describe("Hero Component", () => {
  it("renders the hero information correctly", () => {
    renderWithContext(<Hero hero={mockHero} />, {
      favoritesHeroes: [],
      addHeroAsFavorite: jest.fn(),
      removeHeroAsFavorite: jest.fn(),
    });

    expect(screen.getByText("Spider-Man")).toBeInTheDocument();
    const image = screen.getByTestId("hero-thumbnail");
    expect(image).toHaveAttribute(
      "src",
      "http://example.com/spiderman.jpg"
    );
    expect(image).toHaveAttribute("alt", "");
  });

  it("handles adding a hero as favorite", () => {
    const addHeroAsFavorite = jest.fn();
    const contextValue = {
      favoritesHeroes: [],
      addHeroAsFavorite,
      removeHeroAsFavorite: jest.fn(),
    };

    renderWithContext(<Hero hero={mockHero} />, contextValue);

    const favoriteButton = screen.getByTestId("favorite-button");
    fireEvent.click(favoriteButton);

    expect(addHeroAsFavorite).toHaveBeenCalledWith(mockHero);
  });

  it("handles removing a hero from favorites", () => {
    const removeHeroAsFavorite = jest.fn();
    const contextValue = {
      favoritesHeroes: [mockHero],
      addHeroAsFavorite: jest.fn(),
      removeHeroAsFavorite,
    };

    renderWithContext(<Hero hero={mockHero} />, contextValue);

    const favoriteButton = screen.getByTestId("favorite-button");
    fireEvent.click(favoriteButton);

    expect(removeHeroAsFavorite).toHaveBeenCalledWith(mockHero);
  });

  it("shows the favorite icon as active when the hero is in favorites", () => {
    renderWithContext(<Hero hero={mockHero} />, {
      favoritesHeroes: [mockHero],
      addHeroAsFavorite: jest.fn(),
      removeHeroAsFavorite: jest.fn(),
    });

    const favoriteIcon = screen.getByTestId("favorite-button");
    expect(favoriteIcon).toHaveAttribute("data-active", "true"); // Assumindo que o ícone usa data-active
  });

  it("updates the favorite state based on the context", () => {
    const { rerender } = renderWithContext(<Hero hero={mockHero} />, {
      favoritesHeroes: [],
      addHeroAsFavorite: jest.fn(),
      removeHeroAsFavorite: jest.fn(),
    });

    const favoriteIcon = screen.getByTestId("favorite-button");
    expect(favoriteIcon).toHaveAttribute("data-active", "false");

    rerender(
      <FavoriteHeroesContext.Provider
        value={{
          favoritesHeroes: [mockHero],
          addHeroAsFavorite: jest.fn(),
          removeHeroAsFavorite: jest.fn(),
        }}
      >
        <Router>
          <Hero hero={mockHero} />
        </Router>
      </FavoriteHeroesContext.Provider>
    );

    expect(favoriteIcon).toHaveAttribute("data-active", "true");
  });
});
