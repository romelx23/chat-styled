import styled from "styled-components";

export const GroupListElement = styled.div`
  padding: 10px;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  margin: 10px 0;
  &:hover {
    background: #151155;
    cursor: pointer;
  }
`;

export const GroupListImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25%;
`;

export const GroupListName = styled.p`
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  /* overflow text*/
  width: 150px;
  text-overflow: ellipsis;
`;
