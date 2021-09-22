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

  getUsuarios = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    // axios
    //   .get(url, headers)
    //   .then((res) => {
    //     this.setState({
    //       user: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: "fabio-faria-maryam",
        },
      });
      this.setState({ user: res.data });
    } catch (err) {
      alert("Aconteceu um problema, tente novamente.");
    }
  };

  gerarUsuario = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.valorName,
      email: this.state.valorEmail,
    };

    const res = await axios.post(url, body, {
      headers: {
        Authorization: "fabio-faria-maryam",
      },
    });
    try {
      this.setState({ user: res.data });
      this.getUsuarios();
    } catch (err) {
      alert("Aconteceu um problema, tente novamente.");
    }
    // axios
    //   .post(url, body, headers)
    //   .then((res) => {
    //     this.setState({
    //       name: "",
    //     });
    //     this.setState({
    //       email: "",
    //     });
    //     this.getUsuarios();
    //   })
    //   .catch((err) => {
    //     console.log(err.result);
    //   });
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

  deletarItem = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    const confirmarDelete = window.confirm("Deseja mesmo deletar o usuario?");
    if (confirmarDelete) {
      try {
        await axios.delete(url, {
          headers: {
            Authorization: "fabio-faria-maryam",
          },
        });
        this.getUsuarios();
      } catch (err) {
        alert("Aconteceu um problema, tente novamente.");
      }
    } else {
      alert("Usuario não deletado");
    }
    // axios
    //   .delete(url, headers)
    //   .then((res) => {
    //     this.getUsuarios();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
