import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Container from '../styles/Container';
import InputSearch from '../components/InputSearch';
import FilmeCard from '../components/FilmeCard';

const Form = styled.form`
	width: 100%;
	padding: 60px 30px;
	/* box-shadow: ${(props) => props.theme.sombra2}; */
	border-radius: 15px;
	background-color: ${(props) => props.theme.primary};
	display: flex;
	flex-direction: column;

	p {
		font-size: 30px;
		margin-bottom: 30px;

		span {
			font-weight: bold;
		}
	}

	.form-itens {
		&__wrapper {
			display: flex;
		}
	}
`;

const Submit = styled.button`
	background-color: ${(props) => props.theme.secondary};
	border: none;
	font-size: 20px;
	padding:10px 40px;
	cursor: pointer;
	border-radius: 10px;
	outline: none;
	/* text-transform: uppercase; */
	margin-left: 10px;
	font-weight: bold;
	box-shadow: ${(props) => props.theme.sombra1};
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);

	&:hover {
		box-shadow: ${(props) => props.theme.sombra2};
	}
`;

const ListCards = styled.div``;


function Home() {
  const [info, setInfo] = useState({
    filmeName: '',
  });

  const [filme, setFilme] = useState({});

  const handleInput = ({ currentTarget: { name, value } }) => {
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.get(`http://www.omdbapi.com/?t=${info.filmeName}&apikey=218dfffb`).then((resp) => {
      setFilme(resp.data);
      console.log(resp.data);
    });

    console.log(info, filme);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <p>
					Faça a busca
          <br />
          <span>do seu filme favorito</span>
        </p>
        <div className="form-itens__wrapper">
          <InputSearch
            handleInput={handleInput}
            valor={info.filmeName}
            tipo="text"
            nome="filmeName"
            placeholder="Nome do filme"
          />
          <Submit type="submit">Buscar</Submit>
        </div>
      </Form>
      <ListCards>
        <div>
					daora
        </div>
      </ListCards>
    </Container>
  );
}

export default Home;
