import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Container from '../styles/Container';
import InputSearch from '../components/InputSearch';
import FilmeCard from '../components/FilmeCard';

const Form = styled.form`
	width: 100%;
	padding: 60px 30px;
	border-radius: 15px;
	background-color: ${(props) => props.theme.primary};
	display: flex;
	flex-direction: column;
	box-sizing: border-box;

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
	margin-left: 10px;
	font-weight: bold;
	box-shadow: ${(props) => props.theme.sombra1};
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);

	&:hover {
		box-shadow: ${(props) => props.theme.sombra2};
	}
`;

const ListCards = styled.div`
	margin-top: 60px;
	width: 100%;

	display: flex;
	justify-content: center;
`;


function Home() {
  const [info, setInfo] = useState({
    filmeName: '',
  });

  const [filme, setFilme] = useState(undefined);


  const handleInput = ({ currentTarget: { name, value } }) => {
    setInfo({ ...info, [name]: value });
  };

  const addFavoritos = () => {
    const favoritos = localStorage.getItem('@user-data/filmes-favoritos');

    if (favoritos === null) {
      const data = [filme];
      localStorage.setItem('@user-data/filmes-favoritos', JSON.stringify(data));
    } else {
      const data = JSON.parse(favoritos);
      data.push(filme);
      console.log(data);
      localStorage.setItem('@user-data/favoritos', JSON.stringify(data));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.get(`http://www.omdbapi.com/?t=${info.filmeName}&apikey=218dfffb`).then((resp) => {
      setFilme(resp.data);
    });
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
        {filme && filme !== undefined && <FilmeCard filme={filme} handleClick={() => addFavoritos()} />}
      </ListCards>
    </Container>
  );
}

export default Home;
