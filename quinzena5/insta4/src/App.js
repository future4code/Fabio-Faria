import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const DivAdicionar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        key: 5,
        nomeUsuario: "nicole",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/seed/picsum/200/150",
      },
      {
        key: 1,
        nomeUsuario: "fabio",
        fotoUsuario: "https://picsum.photos/50/50?grayscale",
        fotoPost: "https://picsum.photos/200/150?grayscale",
      },
      {
        key: 2,
        nomeUsuario: "luna",
        fotoUsuario: "https://picsum.photos/id/237/50/50",
        fotoPost: "https://picsum.photos/id/122/200/150",
      },
    ],
    valorInputNome: "",
    valorInputFotoUser: "",
    valorInputFotoPost: "",
  };
  onChangeNomeUsuario = (e) => {
    this.setState({ valorInputNome: e.target.value });
  };

  onchangeFotoUsuario = (e) => {
    this.setState({ valorInputFotoUser: e.target.value });
  };

  onchangeFotoPost = (e) => {
    this.setState({ valorInputFotoPost: e.target.value });
  };

  adicionarPost = () => {
    const novoPost = {
      key: this.state.posts.length + 1,
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUser,
      fotoPost: this.state.valorInputFotoPost,
    };
    this.setState({
      posts: [...this.state.posts, novoPost],
    });
  };

  render() {
    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.key}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <div>
        <DivAdicionar>
          <h1>Adicione um post</h1>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeNomeUsuario}
            placeholder={"Username"}
          />
          <input
            value={this.state.valorInputFotoUser}
            onChange={this.onchangeFotoUsuario}
            placeholder={"Foto Usuario"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onchangeFotoPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionarPost}>Adicionar Post</button>
        </DivAdicionar>
        <MainContainer>{listaPosts}</MainContainer>;
      </div>
    );
  }
}

export default App;
