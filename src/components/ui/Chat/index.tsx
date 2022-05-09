import React, { useRef, useState } from 'react'
import { ChatContainer, ChatInput } from './Chat'
import { ChatItem } from '../ChatItem/item';

export const Chat = () => {
    const [message, setMessage] = useState<string[]>([])
    const [input, setInput] = useState<string>('')
    const chatBody = useRef<HTMLDivElement>(null)
    const handleMessage = () => {
        setMessage([...message, input])
        setInput('')
        // scroll to bottom
        chatBody.current?.scrollIntoView({ behavior: 'smooth' })
        chatBody.current?.scrollHeight
    }
    return (
        <ChatContainer>
            <div className="chat-header">
                <img className='chat-header-img' src="https://scontent.flim17-1.fna.fbcdn.net/v/t39.30808-6/278387985_3307319846166584_7719819027369829638_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=V3gaVCxvYgcAX_UdhM3&tn=U8bUO9DbRf6JR8_w&_nc_ht=scontent.flim17-1.fna&oh=00_AT9DQqXmTcTxw5uy6eE3aPFZh80o7N-kBTnp4e1vGaiz6A&oe=625BDBB1" alt="avatar" />
                <p className='chat-header-name'>Romel Alexis</p>
            </div>
            <div className="chat-body" ref={chatBody}>
                <div className="scroll">
                    {
                        message.map((item, index) => {
                            return <ChatItem key={index} message={item} />
                        })
                    }
                </div>
            </div>
            <ChatInput placeholder='Ingrese su mensaje'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? handleMessage() : null}
            />
        </ChatContainer>
    )
}
