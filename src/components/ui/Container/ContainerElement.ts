import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 100px;
  height: calc(100vh - 100px);
  background: #151122;
  @media screen and (min-width: 768px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
