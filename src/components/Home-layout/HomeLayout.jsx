import React from 'react';
import { ContainerWrapper, HomeLayoutWrapper, Main, Nav, Sidebar } from './HomeLayoutStyles';

const HomeLayout = ({ nav, sidebar, main }) => {
  return (
    <HomeLayoutWrapper>
      <Nav>
        { nav }
      </Nav>
      <ContainerWrapper>
        <Sidebar>
            { sidebar }
        </Sidebar>
        <Main>
            { main }
        </Main>
      </ContainerWrapper>
    </HomeLayoutWrapper>
  )
}

export default HomeLayout;
