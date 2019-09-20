import React from 'react';
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

export default function components() {
  return (
    <NavbarWrapper>
      <p>SearchFlix</p>
    </NavbarWrapper>
  );
}
