import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
	display: flex;
	align-items: center;
	box-shadow: ${(props) => props.theme.sombra1};
	padding: 15px 10px;
	height: 40px;
	background-color: ${(props) => props.theme.primary};

	p {
		font-weight: bold;
		font-size: 25px;
		margin-left: 10px;
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
      <p>SearchFlix</p>
      <NavLink to="/favoritos">Favoritos</NavLink>
    </NavbarWrapper>
  );
}
