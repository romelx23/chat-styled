import React, { FC } from 'react'
import { ChatItemContainer } from './ChatItem'

interface ChatItemProps {
    children?: React.ReactNode;
    message: string;
}

export const ChatItem:FC<ChatItemProps> = ({message,children}) => {
  return (
    <ChatItemContainer>{message?message:'ChatItem'}</ChatItemContainer>
  )
}
