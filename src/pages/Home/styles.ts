import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-bottom: 16px;

  h1 {
    color: ${(props) => props.theme["gray-500"]};
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: -1px;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-300"]};
  }
`;

export const HomeContent = styled.div`
  width: 100%;
  flex-grow: 1;
`;
