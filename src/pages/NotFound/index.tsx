import { Link } from "react-router-dom";
import { NotFoundContainer } from "./styles";

export function NotFound() {
  return (
    <NotFoundContainer>
      <h1>Oh no!</h1>
      <span>Parece que a HIDRA passou por aqui!</span>
      <Link to="/">Voltar para página inicial</Link>
    </NotFoundContainer>
  );
}
