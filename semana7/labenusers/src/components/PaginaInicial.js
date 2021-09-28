import React from "react";
import styled from "styled-components";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  box-sizing: border-box;
  button {
    margin: 4px;
  }
  input {
    padding: 4px;
  }
`;

class PaginaInicial extends React.Component {
  render() {
    return (
      <>
        <ContainerGeral>
          <label htmlFor="nome do usuario">Nome de Usuario</label>
          <input
            value={this.props.valorNome}
            onChange={this.props.gerarValorNome}
            type="text"
            placeholder="Nome do usuario"
          />
          <label htmlFor="email do usuario">Email</label>
          <input
            value={this.props.valorEmail}
            onChange={this.props.gerarValorEmail}
            type="email"
            placeholder="Email"
          />
          <button onClick={this.props.gerarUsuario}>Enviar</button>
          <button onClick={this.props.mudarPagina}>
            Ver Lista de Usuarios
          </button>
        </ContainerGeral>
      </>
    );
  }
}

export default PaginaInicial;
