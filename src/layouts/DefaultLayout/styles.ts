import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  max-width: 74rem;
  padding: 0 2rem;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  display: block;
  width: 100%;
  min-width: 420px;
`;
