import { render, screen } from "@testing-library/react";
import { HeroList } from "../components/HeroList";


// Mock do componente Hero
jest.mock("../components/Hero", () => ({
  Hero: ({ hero }) => (
    <div data-testid={`hero-${hero.id}`}>{hero.name}</div>
  ),
}));

describe("Test for HeroList Component", () => {
  const heroes= [
    {
      id: 1,
      name: "Spider-Man",
      thumbnail: {
        path: "http://example.com/spiderman",
        extension: "jpg",
      },
    },
    {
      id: 2,
      name: "Iron Man",
      thumbnail: {
        path: "http://example.com/ironman",
        extension: "jpg",
      },
    },
  ];

  it("should render the HeroList container", () => {
    render(<HeroList heroes={heroes} />);

    const heroListContainer = screen.getByTestId("herolist-container");
    expect(heroListContainer).toBeInTheDocument();
  });

  it("should render the list of heroes correctly", () => {
    render(<HeroList heroes={heroes} />);

    const heroListContainer = screen.getByTestId("herolist-container");
    expect(heroListContainer).toBeInTheDocument();

    heroes.forEach((hero) => {
      expect(screen.getByTestId(`hero-${hero.id}`)).toBeInTheDocument();
      expect(screen.getByText(hero.name)).toBeInTheDocument();
    });
  });

  it("should render no heroes if the list is empty", () => {
    render(<HeroList heroes={[]} />);

    const heroListContainer = screen.getByTestId("herolist-container");
    expect(heroListContainer).toBeInTheDocument();

    heroes.forEach((hero) => {
      expect(screen.queryByText(hero.name)).not.toBeInTheDocument();
    });
  });

  it("should render the correct number of heroes", () => {
    render(<HeroList heroes={heroes} />);

    const renderedHeroes = screen.getAllByTestId(/hero-/);
    expect(renderedHeroes.length).toBe(heroes.length);
  });
});
