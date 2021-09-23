import React from "react";
import UserLista from "./components/UserLista";
import axios from "axios";
import styled from "styled-components";
import PaginaInicial from "./components/PaginaInicial";
import DetalhesUser from "./components/DetalhesUser";

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
    detalhesUsuario: [
      {
        id: 0,
        name: "Teste",
        email: "Teste@teste.com",
      },
    ],
    valorName: "",
    valorEmail: "",
    render: 0,
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

  getUsuarioId = (id) => {
    this.setState({
      render: 2,
    });
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    const detalhe = [];
    try {
      const res = axios.get(url, {
        headers: {
          Authorization: "fabio-faria-maryam",
        },
      });
      detalhe.push(res.data);
      this.setState({
        detalhesUsuario: detalhe,
      });
      console.log(this.state.detalhesUsuario);
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
  };

  mudarRender = () => {
    this.setState({
      render: this.state.render + 1,
    });
  };

  voltarPagina = () => {
    this.setState({
      render: 0,
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
  };

  renderizarPagina = () => {
    switch (this.state.render) {
      case 0:
        return (
          <PaginaInicial
            mudarPagina={this.mudarRender}
            gerarUsuario={this.gerarUsuario}
            gerarValorNome={this.gerarValorNome}
            gerarValorEmail={this.gerarValorEmail}
          />
        );
      case 1:
        return (
          <UserLista
            detalhes={this.state.detalhesUsuario[0]}
            user={this.state.user}
            key={this.state.name}
            voltarPagina={this.voltarPagina}
            deletarItem={this.deletarItem}
            detalharUser={this.getUsuarioId}
          />
        );
      case 2:
        return (
          <DetalhesUser
            detalhes={this.state.detalhesUsuario[0]}
            nome={this.state.user.name}
            email={this.state.user.email}
            voltarPagina={this.voltarPagina}
            deletarItem={this.deletarItem}
            detalharUser={this.getUsuarioId}
          />
        );
      default:
        return (
          <PaginaInicial
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
