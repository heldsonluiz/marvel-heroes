import { screen, render } from "@testing-library/react";
import { Footer } from "../components/Footer"

describe("Test Footer Component", () => {
  it("should render the footer component correclty", () => {
    render(<Footer/>)

    const footer = screen.getByTestId("footer")
    expect(footer).toBeInTheDocument()
  });
})

