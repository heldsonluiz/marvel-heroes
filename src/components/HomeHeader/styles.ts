import styled from "styled-components";

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
