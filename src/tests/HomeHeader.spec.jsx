import { render, screen } from "@testing-library/react";
import {HomeHeader} from "../components/HomeHeader"

describe("Tests for HomeHeader Component", () => {
  it("should show the logo image with the correct source", () => {
    render(<HomeHeader source={"test-url"}/>);

    const logoImage = screen.getByTestId("header-image");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "test-url"); // Ajuste conforme o caminho correto do arquivo.
    expect(logoImage).toHaveAttribute("alt", "");
  });

  it("should show the main heading", () => {
    render(<HomeHeader />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Explore o universo");
  });

  it("should show the description text", () => {
    render(<HomeHeader />);

    const description = screen.getByText(/Mergulhe no domínio deslumbrante/i);
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(
      "Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!"
    );
  });
})