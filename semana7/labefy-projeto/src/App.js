import React from "react";
import axios from "axios";
import styled from "styled-components";
import ManagePlaylists from "./components/ManagePlaylists";
import AddPlaylist from "./components/AddPlaylist";
import Header from "./components/Header";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    pageContent: "addPlaylist",
  };

  renderPages = () => {
    if (this.state.pageContent === "addPlaylist") {
      return <AddPlaylist />;
    } else if (this.state.pageContent === "managePlaylists") {
      return <ManagePlaylists />;
    }
  };

  onChangePage = (page) => {
    this.setState({ pageContent: page });
  };

  render() {
    return (
      <AppContainer>
        <Header changePage={this.onChangePage} />
        {this.renderPages()}
      </AppContainer>
    );
  }
}

export default App;
