import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../styles/Container';
import FilmeCard from '../components/FilmeCard';

const ListCards = styled.div`
  margin-top: 60px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .aviso{
    font-size: 25px;
  }
`;

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const [controles, setControles] = useState({
    pesquisa: false,
  });

  function removerFavorito(id) {
    console.log('oi', id);

    const novosFavoritos = favoritos.filter((favorito) => {
      if (id !== favorito.imdbID) {
        return favorito;
      }
    });

    localStorage.setItem('@user-data/filmes-favoritos', JSON.stringify(novosFavoritos));

    setFavoritos({
      novosFavoritos,
    });
  }

  useEffect(() => {
    async function buscaFavoritos() {
      const favoritosStorage = await localStorage.getItem('@user-data/filmes-favoritos');
      await setFavoritos(JSON.parse(favoritosStorage));
      await setControles({
        pesquisa: true,
      });
    }
    buscaFavoritos();
  }, ['umavez']);


  return (
    <Container>
      <ListCards>
        {favoritos && favoritos.length >= 1 && favoritos.map((favorito) => <FilmeCard key={favorito.imdbID} handleClick={removerFavorito} filme={favorito} pagina="favoritos" />)}
        {favoritos && favoritos.length < 1 && controles.pesquisa === true || favoritos === null && controles.pesquisa === true && <p className="aviso">Sem favoritos!</p>}
      </ListCards>
    </Container>
  );
}
