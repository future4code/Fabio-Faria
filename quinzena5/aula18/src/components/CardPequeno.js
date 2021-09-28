import React from "react";
import styled from "styled-components";

const DivPaiContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 50px;

  img {
    width: 20px;
    margin-right: 8px;
  }
`;

const CardPequeno = (props) => {
  return (
    <DivPaiContainer>
      <img src={props.imagem} alt="Icones" />
      <div>
        <p>
          <b>{props.titulo}</b>: {props.texto}
        </p>
      </div>
    </DivPaiContainer>
  );
};

export default CardPequeno;
