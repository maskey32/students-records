import styled from 'styled-components';

export const HomeLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  top: 47px;
`;

export const Sidebar = styled.div`
  width: 16%;
  height: calc(100vh - 45px);
  background-color: #f2f2f2;
  padding: 20px;
  position: fixed;
  background-color: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 991px) {
    display: none;
  }
  `;

export const Main = styled.main`
  width: 84%;
  padding: 50px 100px;
  overflow-y: auto;
  position: relative;
  left: 16%;
  background-color: #f9f9f9;

  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
  
  @media (max-width: 991px) {
    width: 100%;
    left: 0;
  }
`;

export const Nav = styled.nav`
  background-color: #4682B4;
  width: 100%;
  color: #fff;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;