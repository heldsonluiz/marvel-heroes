import { render, screen } from "@testing-library/react";
import { Loading } from "../components/Loading";

describe("Tests for Loading Component", () => {
  it("should render the Sentry loading spinner", () => {
    render(<Loading />);

    // Verifica se o componente Sentry foi renderizado
    const spinner = screen.getByTestId("progressbar"); // `react-activity` utiliza este papel para os spinners
    expect(spinner).toBeInTheDocument();
  });

  it("should render the loading text", () => {
    render(<Loading />);

    // Verifica se o texto "CARREGANDO" está presente
    const loadingText = screen.getByText("CARREGANDO");
    expect(loadingText).toBeInTheDocument();
    expect(loadingText.tagName).toBe("STRONG"); // Garante que o texto está em um <strong>
  });
});
