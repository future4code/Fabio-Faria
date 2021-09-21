import React from "react";
import UserLista from "./components/UserLista";
import axios from "axios";
import styled from "styled-components";
import PaginaInicial from "./components/PaginaInicial";

const PosicaoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 4px;
`;

const headers = {
  headers: {
    Authorization: "fabio-faria-maryam",
  },
};

class App extends React.Component {
  state = {
    user: "",
    email: "",
    valorName: "",
    valorEmail: "",
    verLista: false,
  };

  componentDidMount() {
    this.getUsuarios();
  }

  gerarValorNome = (event) => {
    this.setState({
      valorName: event.target.value,
    });
  };

  gerarValorEmail = (event) => {
    this.setState({
      valorEmail: event.target.value,
    });
  };

  getUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  gerarUsuario = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.valorName,
      email: this.state.valorEmail,
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({
          name: "",
        });
        this.setState({
          email: "",
        });
        this.getUsuarios();
      })
      .catch((err) => {
        console.log(err.result);
      });
  };

  mudarPagina = () => {
    this.setState({
      verLista: true,
    });
  };
  voltarPaginaInicial = () => {
    this.setState({
      verLista: false,
    });
  };

  deletarItem = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, headers)
      .then((res) => {
        this.getUsuarios();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderizarPagina = () => {
    switch (this.state.verLista) {
      case false:
        return (
          <PaginaInicial
            mudarPagina={this.mudarPagina}
            gerarUsuario={this.gerarUsuario}
            gerarValorNome={this.gerarValorNome}
            gerarValorEmail={this.gerarValorEmail}
          />
        );
      case true:
        return (
          <UserLista
            user={this.state.user}
            key={this.state.name}
            voltarPagina={this.voltarPaginaInicial}
            deletarItem={this.deletarItem}
          />
        );
      default:
        return (
          <PaginaInicial
            mudarPagina={this.mudarPagina}
            gerarUsuario={this.gerarUsuario}
            gerarValorNome={this.gerarValorNome}
            gerarValorEmail={this.gerarValorEmail}
          />
        );
    }
  };

  render() {
    return <PosicaoContainer>{this.renderizarPagina()}</PosicaoContainer>;
  }
}

export default App;
