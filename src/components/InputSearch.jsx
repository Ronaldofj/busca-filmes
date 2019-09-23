/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  max-width: 600px;

  input {
    height: 50px;
    width: 400px;
    font-size: 18px;
    padding-left: 20px;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    outline: none;
    box-sizing: border-box;

    @media(max-width: 660px) {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
`;

function InputSearch({
  nome, tipo, handleInput, valor, placeholder,
}) {
  return (
    <InputWrapper>
      <input type={tipo} name={nome} onChange={handleInput} value={valor} placeholder={placeholder} />
    </InputWrapper>
  );
}

InputSearch.propTypes = {
  nome: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputSearch;
