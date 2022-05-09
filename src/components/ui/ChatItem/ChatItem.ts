import styled from "styled-components";

export const ChatItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    /* margin-bottom: 10px; */
    background: #151155;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: #1863ff;
        cursor: pointer;
    }
`;