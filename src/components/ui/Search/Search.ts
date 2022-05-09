import styled from "styled-components";

export const SearchDiv = styled.div`
    width:100%;
    position:relative;
    display:flex;
`;

export const SearchInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #fff;
    padding: 10px;
    background:transparent;
    color:#fff ;
    outline:none;
    border-bottom:none;
    &:focus{
        border-bottom:1px solid #fff;
    }
`;

export const IconSearch=styled.div`
    width:20px;
    height:20px;
    svg path{
        stroke:#444;
    }
`

export const InputLabel=styled.label`
    position:absolute ;
    top:10px;
    right:10px;
    font-size:16px;
    font-weight:bold;
    color:#fff;
`