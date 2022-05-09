import React, { FC } from 'react'
import { ContainerDiv } from './ContainerElement';

interface ContainerProps {
    children: React.ReactNode;
}

export const Container:FC<ContainerProps> = ({children}) => {
  return (
    <ContainerDiv>
        {children}
    </ContainerDiv>
  )
}
