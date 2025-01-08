import { HeaderContainer } from "./styles";

interface HomeHeaderProps {
  source: string
}
export function HomeHeader ({source}:HomeHeaderProps) {
  return (
    <HeaderContainer>
      <img src={source} alt="" data-testid="header-image"/>
      <h1>Explore o universo</h1>
      <span>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </span>
    </HeaderContainer>
  );
}
