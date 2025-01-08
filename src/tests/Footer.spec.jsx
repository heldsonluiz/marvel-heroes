import { screen, render } from "@testing-library/react";
import { Footer } from "../components/Footer"

describe("Tests for Footer Component", () => {
  it("should render the footer component correclty", () => {
    render(<Footer/>)

    const footer = screen.getByTestId("footer")
    expect(footer).toBeInTheDocument()
  });
})

