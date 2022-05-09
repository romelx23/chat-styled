import styled from "styled-components";
export const CategoryitemDiv = styled.div`
  height: 30px;
  padding: 10px ;
  border-radius: 10px;
  background: #151199;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #1863ff;
    cursor: pointer;
    }
  p{
    font-size: .85rem;
    font-weight: bold;
  }
`;
