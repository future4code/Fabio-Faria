import React from "react";
import "./styles/app.css";
import User1 from "./components/User1";

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
  };

  render() {
    const post = this.state.user.map((user) => {
      let mensagem = `${user.nome} ${user.mensagem}`;
      return (
        <div>
          <p>{mensagem}</p>
        </div>
      );
    });

    return (
      <>
        <div className="container-mensagem">
          <div className="post-estilo">{post}</div>
        </div>

        <User1
          user={this.escreverUser}
          mensagem={this.escreverMensagem}
          post={this.adicionarPost}
        />
      </>
    );
  }
}

export default App;
