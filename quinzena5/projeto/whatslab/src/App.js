import React from "react";
import styled from "styled-components";
import User1 from "./components/User1";

const DivChat = styled.div`
  width: 70%;
  height: 80vh;
  margin-left: 15%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #f5f5f5;
  box-sizing: border-box;
`;

const DivTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const InputsSeparados = styled.div`
  display: flex;
  justify-content: center;
`;

class App extends React.Component {
  state = {
    user: [{ nome: "", mensagem: "" }],
    valorNome: "",
    valorMensagem: "",
  };

  escreverUser = (e) => {
    this.setState({
      valorNome: e.target.value,
    });
  };

  escreverMensagem = (e) => {
    this.setState({ valorMensagem: e.target.value });
  };

  adicionarPost = () => {
    this.setState({
      user: [
        ...this.state.user,
        { nome: this.state.valorNome, mensagem: this.state.valorMensagem },
      ],
    });
    this.limparCampos();
  };

  limparCampos() {
    this.state.valorMensagem = "";
    this.state.valorNome = "";
  }

  render() {
    const post = this.state.user.map((user) => {
      return (
        <div>
          <p>{user.nome}</p>
          <p>{user.mensagem}</p>
        </div>
      );
    });

    return (
      <>
        <DivChat>
          <DivTexto>{post}</DivTexto>
        </DivChat>
        <InputsSeparados>
          <User1
            mensagem={this.escreverUser}
            user={this.escreverMensagem}
            post={this.adicionarPost}
          />
        </InputsSeparados>
      </>
    );
  }
}

export default App;
