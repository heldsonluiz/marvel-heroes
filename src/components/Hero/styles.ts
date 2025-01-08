import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 2px solid transparent;
  padding: 4px;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(110%);

    box-shadow: 0px 4px 28px -14px rgba(0, 0, 0, 0.75);
  }
`;

export const HeroThumbnail = styled.div`
  object-fit: cover;
  img {
    border-bottom: 4px solid ${(props) => props.theme["red-500"]};
    aspect-ratio: 1/1;
    width: 250px;
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme["gray-500"]};

    &:hover {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  img {
    cursor: pointer;
  }
`;
