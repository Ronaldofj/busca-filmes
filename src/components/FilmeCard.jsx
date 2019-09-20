import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const Button = styled.button`
	background-color: ${(props) => props.theme.primary};
	color: #fff;
	font-weight: bold;
	border-radius: 5px;
	padding: 10px;
	border: none;

	margin: 0 5px;
	cursor: pointer;
	outline: none;
`;

const FilmeCardWrapper = styled.div`
	box-shadow: ${(props) => props.theme.sombra1};
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	border-radius: 10px;
	overflow: hidden;

	display: flex;
  width: 550px;
	box-sizing: border-box;
	

	img{
		height: 300px;
	}

	.filme-card {
		&__title{
			background-color: ${(props) => props.theme.primary};
			font-size: 25px;
			font-weight: bold;
			text-align: center;
			padding: 20px 0;
			margin-top: -3px;
		}

		&__text {
			color: ${(props) => props.theme.primary};
			font-weight: bold;
			margin: 20px 10px;	
		}

		&__content-wrapper{
			width: 100%;
		}

		&__buttons-wrapper {
			margin: 5px;
			display: flex;
			justify-content: flex-end;
		}
	}

	&:hover {
		box-shadow: ${(props) => props.theme.sombra2};
	}
`;

const Rating = styled.div`
	display: flex;
	align-items: center; 
	margin: 5px 10px;
 
	img{
		width: 25px;
		height: 25px;
	}

	p{
		color: ${(props) => props.theme.primary};
		font-weight: bold;
		margin-left: 5px;
	}
`;

function FilmeCard({
  filme: {
    Title, Plot, Poster, Ratings,
  },
  handleClick,
}) {
  const newRatings = Ratings.map((rating) => {
    const icon = rating.Source.split(' ').join('');
    return {
      iconPath: icon.toLowerCase(),
      value: rating.Value,
    };
  });

  return (
    <FilmeCardWrapper>
      <img src={Poster} alt={Title} />
      <div className="filme-card__content-wrapper">
        <p className="filme-card__title">{Title}</p>
        <p className="filme-card__text">{`Sinopse: ${Plot}`}</p>
        {newRatings.map((rating) => (
          <Rating key={rating.iconPath}>
            <img src={`/img/${rating.iconPath}.png`} alt={rating.iconPath} />
            <p>{rating.value}</p>
          </Rating>
        ))}
        <div className="filme-card__buttons-wrapper">
          <Button>ver mais</Button>
          <Button onClick={handleClick}>favoritar</Button>
        </div>
      </div>
    </FilmeCardWrapper>
  );
}

FilmeCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  filme: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Ratings: PropTypes.arrayOf([Object]).isRequired,
  }).isRequired,
};

export default FilmeCard;
