/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
import React, { useState } from 'react';
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
    color: #fff;

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
  background-color: #fff;
  color: ${(props) => props.theme.primary};
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

  .aviso{
    font-size: 25px;
  }
`;


function Home() {
  const [info, setInfo] = useState({
    filmeName: '',
    favorito: false,
    buscando: false,
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

      alert('Filme adicionado aos Favoritos!');
    } else {
      const data = JSON.parse(favoritos);

      data.map((favorito) => {
        if (favorito.imdbID === filme.imdbID) {
          alert('Filme já adicionado nos Favoritos!');
          return false;
        }
      });

      data.push(filme);
      localStorage.setItem('@user-data/filmes-favoritos', JSON.stringify(data));

      alert('Filme adicionado aos Favoritos!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setInfo({ ...info, buscando: true });

    await axios.get(`http://www.omdbapi.com/?t=${info.filmeName}&apikey=218dfffb`).then((resp) => {
      if (info.filmeName.length < 1) {
        alert('Escreva o nome do Filme!');
        return false;
      }

      if (resp.data.Response === 'False' && info.filmeName.length > 1) {
        alert('Filme não encontrado!');
        return false;
      }

      setInfo({ ...info, buscando: false });

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
        {filme && filme !== undefined && <FilmeCard filme={filme} handleClick={() => addFavoritos()} favorito={info.favorito} pagina="home" />}
        {info.buscando && <p className="aviso">Buscando...</p>}
      </ListCards>
    </Container>
  );
}

export default Home;
