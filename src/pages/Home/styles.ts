import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const HomeContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 30px;
`;

export const OrderAndFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 560px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const SortingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-block: 32px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-block: 16px;
    align-items: flex-start;
  }
`;
export const ResultsFound = styled.div`
  color: ${(props) => props.theme["gray-100"]};
  font-weight: 600;

  @media (max-width: 768px) {
    margin-top: 8px;
    font-size: 0.875rem;
  }
`;
export const OrderControllerContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["red-300"]};
  font-size: 0.875rem;
  font-weight: 600;
  gap: 8px;
  img {
    width: 20px;
    height: 30px;
  }
`;
