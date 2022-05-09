import styled from "styled-components";

export const NavbarNav=styled.nav`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0.5rem 1rem;
    background:#151122;
`

export const NavbarList=styled.ul`
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    list-style:none;
    padding:0;
    margin:0;
`
export const NavbarListItem=styled.li`
`
export const NavbarListItemLink=styled.a`
    text-decoration:none ;
    color:#fff;
    width:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0.5rem 1rem;
    border-radius:0.5rem;
    cursor:pointer;
    transition:all 0.3s ease-in-out;
    &:hover{
        background-color:#117568;
        color:#555;
    }
`
