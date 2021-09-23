import React from "react";
import styled from "styled-components";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 100%;
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

class UserLista extends React.Component {
  render() {
    const usuarios = this.props.user.map((usuario) => {
      return (
        <li key={usuario.id}>
          {usuario.name}
          <button onClick={() => this.props.detalharUser(usuario.id)}>
            Detalhes do usuario
          </button>
          <button onClick={() => this.props.deletarItem(usuario.id)}>
            Deletar
          </button>
        </li>
      );
    });
    return (
      <ContainerGeral>
        {usuarios}
        <button onClick={this.props.voltarPagina}>Voltar</button>
      </ContainerGeral>
    );
  }
}

export default UserLista;
