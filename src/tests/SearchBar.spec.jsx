import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "../components/SearchBar";
import { SearchContext } from "../contexts/SearchContext";

describe("Test for SearchBar Component", () => {
  const mockUpdateSearchTerm = jest.fn();

  const renderSearchBar = (searchValue) => {
    render(
      <SearchContext.Provider
        value={{
          searchValue,
          updateSearchValue: mockUpdateSearchTerm,
        }}
      >
        <SearchBar />
      </SearchContext.Provider>
    );
  };

  it("should show the search container", () => {
    renderSearchBar("");

    const searchContainer = screen.getByTestId("search-container");
    expect(searchContainer).toBeInTheDocument();
  });

  it("should show the search input with the correct placeholder", () => {
    renderSearchBar("");

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("placeholder", "Procure por heróis");
  });

  it("should render the search icon", () => {
    renderSearchBar("");

    const searchIcon = screen.getByTestId("search-input-icon");
    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveAttribute("src", expect.stringContaining("test-file-stub"));
  });

  it("should show the search tip text", () => {
    renderSearchBar("");

    const searchTip = screen.getByTestId("search-tip");
    expect(searchTip).toBeInTheDocument();
    expect(searchTip).toHaveTextContent(
      "* Busque por heróis que iniciam com o nome digitado, incluindo caracteres especiais"
    );
  });

  it("should update the search term when input value changes", () => {
    renderSearchBar("");

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Spider-Man" } });

    expect(mockUpdateSearchTerm).toHaveBeenCalledWith("Spider-Man");
  });

   it("should clear the search input value when clear icon is clicked", () => {
    renderSearchBar("Spider-Man");

    const searchInput = screen.getByTestId("search-input");
    const clearInputIcon = screen.getByTestId("clear-input-icon");

    expect(searchInput).toHaveValue("Spider-Man");

    fireEvent.click(clearInputIcon);

    expect(mockUpdateSearchTerm).toHaveBeenCalledWith("");
  });

});
