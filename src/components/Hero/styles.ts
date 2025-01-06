import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const HeroThumbnail = styled.div`
  object-fit: cover;
  img {
    border-bottom: 4px solid ${(props) => props.theme["red-500"]};
    aspect-ratio: 1/1;
    min-width: 132px;
    max-width: 100%;
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
