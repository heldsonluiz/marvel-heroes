import styled from "styled-components";

export const ToggleIconContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 80px;
  height: 40px;
  cursor: pointer;

  img {
    width: 80px;
    height: 40px;
  }
`;

export const ToggleIconOn = styled.img`
  margin-top: 1px;
`;

export const ToggleIconOff = styled.img`
  margin-top: -1px;
`;
