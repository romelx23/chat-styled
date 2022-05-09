import React, { FC } from 'react'
import styled from 'styled-components'
interface PropsLayout{
    children: React.ReactNode
}

export const Layout:FC<PropsLayout> = ({children}) => {
    return (
        <LayoutDiv>
            {children}
        </LayoutDiv>
    )
}

const LayoutDiv = styled.div`
    width:100% ;
    min-height: 100vh;
    background:#333 ;
    color:#fff ;
`