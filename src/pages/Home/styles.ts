import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-grow: 1;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-block: 30px;
  width: 100%;
  justify-content: center;
`;
export const LabelSearchContainer = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  color: ${(props) => props.theme["red-300"]};
`;
export const SearchInputContainer = styled.input`
  width: 50rem;
  background: ${(props) => props.theme["red-100"]};
  padding: 20px;
  border: 0;
  border-radius: 80px;
  color: ${(props) => props.theme["red-300"]};
  font-weight: bold;
  font-size: 0.875rem;
  padding-left: 80px;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme["red-300"]};
  }
  &:-ms-input-placeholder {
    color: ${(props) => props.theme["red-300"]};
  }
`;
export const SearchInputIcon = styled.img`
  height: 32px;
  width: 32px;
  position: absolute;
  left: 30px;
`;

export const OrderAndFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 32px;
`;

export const SortingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-block: 15px;
`;
export const ResultsFound = styled.div`
  color: ${(props) => props.theme["gray-100"]};
  font-weight: 600;
`;
export const OrderControllerContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["red-300"]};
  font-size: 0.875rem;
  font-weight: 600;
  gap: 15px;
  img {
    width: 20px;
    height: 30px;
  }
`;
