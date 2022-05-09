import { useState } from 'react'
import { GlobalStyle } from './GlobalStyle';
import { GroupList } from './components/ui/GroupList';
import { Layout } from './components/Layouts/Layout/Layout';
import { Navbar } from './components/ui/Navbar/index';
import { Container } from './components/ui/Container';
import { CategoryList } from './components/ui/CategoryList';
import { Chat } from './components/ui/Chat';

function App() {

  return (
    <div className="">
      <GlobalStyle />
      <Layout>
        <Navbar />
        <CategoryList/>
        <Container>
          <GroupList title='Lista de Grupos' groups={[]}/>
          <Chat/>
          <GroupList title='Lista de Usuarios' groups={[]}/>
        </Container>
      </Layout>
    </div>
  )
}

export default App
