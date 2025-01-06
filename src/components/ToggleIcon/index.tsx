import toggleOnIcon from "../../assets/toggle_on.svg";
import toggleOffIcon from "../../assets/toggle_off.svg";
import { ToggleIconContainer, ToggleIconOff, ToggleIconOn } from "./styles";

interface ToggleIconProps {
  active: boolean;
  loading: boolean;
  onToggleChange: () => void;
}

export function ToggleIcon({
  active,
  loading = false,
  onToggleChange,
}: ToggleIconProps) {
  const handleOnClickToggleIcon = () => {
    if (loading) return;
    onToggleChange();
  };

  return (
    <ToggleIconContainer onClick={handleOnClickToggleIcon}>
      {active ? (
        <ToggleIconOn src={toggleOnIcon} alt="" />
      ) : (
        <ToggleIconOff src={toggleOffIcon} alt="" />
      )}
    </ToggleIconContainer>
  );
}
