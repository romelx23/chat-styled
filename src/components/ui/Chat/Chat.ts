import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  /* min-height:calc(100vh - 112px); */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #151122;
  border: 1px solid #211b5e;
  & {
    grid-row: 1/2;
  }
  @media screen and (min-width: 768px) {
    & {
      /* grid-row: 2/3; */
      grid-column: 2/3;
    }
  }
  .chat-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #151155;
    padding: 10px;
    .chat-header-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #151122;
    }
    .chat-header-name {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .chat-body {
    overflow-y:auto;
    width: 100%;
    height: calc(100vh - 250px);
    min-height: 100px;
    padding: 10px;
    background: #151122;
    border: 1px solid #211b5e;
    /* custom bar */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #151155;
    }
    ::-webkit-scrollbar-thumb {
      background: #153999;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #151122;
    }
  }
  .scroll{
    /* overflow-y:auto; */
    min-height: calc(100vh - 250px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
  }
`;

export const ChatInput = styled.input`
  width: 100%;
  border: none;
  border: 1px solid transparent;
  padding: 10px;
  background: transparent;
  color: #fff;
  outline: none;
  &:focus {
    border: 1px solid #fff;
  }
`;
