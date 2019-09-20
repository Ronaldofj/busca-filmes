import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  box-shadow: ${(props) => props.theme.sombra1};
  padding: 15px 10px;
  background-color: ${(props) => props.theme.primary};
  box-sizing: border-box;

  p {
    font-weight: bold;
    font-size: 25px;
    margin-left: 10px;
  }
`;

const NavContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  `;

const Logo = styled(Link)`

    img{
      height: 50px;
      width: 50px;
      margin-right: 10px;
    }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  border-bottom: 3px solid transparent;
  transition: all .3s;
  text-decoration: none;
  padding: 5px 0;

  &:hover {
    border-bottom: 3px solid #fff;
  }
`;

export default function components() {
  return (
    <NavbarWrapper>
      <NavContainer>
        <Logo to="/">
          <img src="/img/logo.png" alt="Searchflix" />
        </Logo>
        <NavLink to="/favoritos">Favoritos</NavLink>
      </NavContainer>
    </NavbarWrapper>
  );
}
