import "react-activity/dist/library.css";
import { Sentry } from "react-activity";
import { LoadingContainer } from "./styles";

export function Loading () {
  return (
    <LoadingContainer>
      <Sentry />
      <strong>CARREGANDO</strong>
    </LoadingContainer>
  );
}
