import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

export function HomeHeader() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <h1>Explore o universo</h1>
      <span>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </span>
    </HeaderContainer>
  );
}
