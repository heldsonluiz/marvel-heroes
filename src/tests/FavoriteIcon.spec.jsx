import { render, screen, fireEvent } from "@testing-library/react";
import { FavoriteIcon } from "../components/FavoriteIcon";

describe("FavoriteIcon Component", () => {
  it("renders the label correctly", () => {
    render(
      <FavoriteIcon
        active={false}
        loading={false}
        onClickAction={jest.fn()}
        label="Favorite"
      />
    );

    expect(screen.getByText("Favorite")).toBeInTheDocument();
  });

  it("displays the correct button state when active", () => {
    render(
      <FavoriteIcon
        active={true}
        loading={false}
        onClickAction={jest.fn()}
      />
    );

    const button = screen.getByTestId("favorite-button");
    expect(button).toHaveAttribute("data-active", "true");
  });

  it("displays the correct button state when not active", () => {
    render(
      <FavoriteIcon
        active={false}
        loading={false}
        onClickAction={jest.fn()}
      />
    );

    const button = screen.getByTestId("favorite-button");
    expect(button).toHaveAttribute("data-active", "false");
  });

  it("calls the onClickAction when clicked and not loading", () => {
    const onClickAction = jest.fn();

    render(
      <FavoriteIcon
        active={false}
        loading={false}
        onClickAction={onClickAction}
      />
    );

    const button = screen.getByTestId("favorite-button");
    fireEvent.click(button);

    expect(onClickAction).toHaveBeenCalledTimes(1);
  });

  it("does not call onClickAction when clicked while loading", () => {
    const onClickAction = jest.fn();

    render(
      <FavoriteIcon
        active={false}
        loading={true}
        onClickAction={onClickAction}
      />
    );

    const button = screen.getByTestId("favorite-button");
    fireEvent.click(button);

    expect(onClickAction).not.toHaveBeenCalled();
  });

  it("handles both active and loading states correctly", () => {
    const { rerender } = render(
      <FavoriteIcon
        active={false}
        loading={false}
        onClickAction={jest.fn()}
      />
    );

    const button = screen.getByTestId("favorite-button");
    expect(button).toHaveAttribute("data-active", "false");

    rerender(
      <FavoriteIcon
        active={true}
        loading={true}
        onClickAction={jest.fn()}
      />
    );

    expect(button).toHaveAttribute("data-active", "true");
  });
});
