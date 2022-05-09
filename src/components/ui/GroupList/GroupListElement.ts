import styled from "styled-components";

export const GroupListDiv=styled.div`
    width:100%;
    border:1px solid #211b5e ;
    padding: 10px;
    border-radius: 5px;
    min-height: 100px;
    height:calc(100vh - 100px);
    background:#151122 ;
`
export const GroupListHeader=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
`

export const GroupInput=styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #fff;
    padding: 10px;
    background:transparent;
    color:#fff ;
    outline:none;
    border-bottom:none;
    margin-bottom:10px;
    &:focus{
        border-bottom:1px solid #fff;
    }
`

export const GroupTitle=styled.div`
    font-size:20px;
    font-weight:bold;
    color:#fff;
`

export const IconPlus=styled.div`
    width:20px;
    height:20px;
    & svg{
        transition: all 0.3s ease-in-out;
    }
    &:hover{
        cursor:pointer;
        background:#151555;
    }
    &:hover svg{
        transform:scale(1.5);
    }
`