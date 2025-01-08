import "react-activity/dist/library.css";
import { Sentry } from "react-activity";
import { LoadingContainer } from "./styles";

export function Loading () {
  return (
    <LoadingContainer data-testid="progressbar">
      <Sentry />
      <strong>CARREGANDO</strong>
    </LoadingContainer>
  );
}
