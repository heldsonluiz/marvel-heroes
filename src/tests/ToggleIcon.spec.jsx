import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleIcon } from "../components/ToggleIcon";

describe("Tests for ToggleIcon Component", () => {
  it("should render the active toggle icon when active is true", () => {
    render(
      <ToggleIcon active={true} loading={false} onToggleChange={jest.fn()} />
    );

    const activeIcon = screen.getByTestId("toggle-active");
    expect(activeIcon).toBeInTheDocument();
    expect(activeIcon).toHaveAttribute("src", expect.stringContaining("test-file-stub")); // Verifica se o ícone ativo está correto
    expect(activeIcon).toHaveAttribute("alt", ""); // Verifica o atributo alt vazio
  });

  it("sshould render the inactive toggle icon when active is false", () => {
    render(
      <ToggleIcon active={false} loading={false} onToggleChange={jest.fn()} />
    );

    const inactiveIcon = screen.getByTestId("toggle-inactive");
    expect(inactiveIcon).toBeInTheDocument();
    expect(inactiveIcon).toHaveAttribute("src", expect.stringContaining("test-file-stub")); // Verifica se o ícone inativo está correto
    expect(inactiveIcon).toHaveAttribute("alt", ""); // Verifica o atributo alt vazio
  });

  it("should execute onToggleChange when clicked and not loading", () => {
    const onToggleChange = jest.fn();
    render(
      <ToggleIcon active={false} loading={false} onToggleChange={onToggleChange} />
    );

    const toggleContainer = screen.getByTestId("toggle-button"); // Assume-se que o container pode ser tratado como botão
    fireEvent.click(toggleContainer);

    expect(onToggleChange).toHaveBeenCalledTimes(1);
  });

  it("should not call onToggleChange when loading is true", () => {
    const onToggleChange = jest.fn();
    render(
      <ToggleIcon active={false} loading={true} onToggleChange={onToggleChange} />
    );

    const toggleContainer = screen.getByTestId("toggle-button");
    fireEvent.click(toggleContainer);

    expect(onToggleChange).not.toHaveBeenCalled();
  });

  it("should test both active and loading states correctly", () => {
    const { rerender } = render(
    <ToggleIcon active={true} loading={false} onToggleChange={jest.fn()} />
    );

    const iconActive = screen.getByTestId("toggle-active");
    expect(iconActive).toHaveAttribute("src", expect.stringContaining("test-file-stub"));

    rerender(
      <ToggleIcon active={false} loading={false} onToggleChange={jest.fn()} />
    );

    const iconInactive = screen.getByTestId("toggle-inactive");
    expect(iconInactive).toHaveAttribute("src", expect.stringContaining("test-file-stub"));
  });
});
