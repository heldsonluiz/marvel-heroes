import {
  FavoriteButtonContainer,
  FavoriteButtonContainerOff,
  FavoriteButtonContainerOn,
  FavoriteContainer,
  FavoriteLabel
} from "./styles";

interface FavoriteIconProps {
  active: boolean;
  loading: boolean;
  onClickAction: () => void;
  label?: string;
}

export function FavoriteIcon ({
  active,
  loading,
  label,
  onClickAction
}: FavoriteIconProps) {
  const handleClickAction = () => {
    if (loading) return;
    onClickAction();
  };

  return (
    <FavoriteContainer>
      <FavoriteButtonContainer onClick={handleClickAction}>
        {active ? (
          <FavoriteButtonContainerOn />
        ) : (
          <FavoriteButtonContainerOff />
        )}
      </FavoriteButtonContainer>
      <FavoriteLabel>{label}</FavoriteLabel>
    </FavoriteContainer>
  );
}
