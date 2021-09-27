import React from "react";
import styled from "styled-components";
import Playlists from "./Playlists";
import PlaylistsDetails from "./PlaylistsDetails";

const ManagePlaylistsContainer = styled.div``;

class ManagePlaylists extends React.Component {
  state = {
    currentPage: "playlist",
  };

  renderNewPage = () => {
    if (this.state.currentPage === "playlist") {
      return <Playlists changePage={this.onChangePage} />;
    } else if (this.state.currentPage === "playlistsDetails") {
      return <PlaylistsDetails changePage={this.onChangePage} />;
    }
  };

  onChangePage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <ManagePlaylistsContainer>
        {this.renderNewPage()}
      </ManagePlaylistsContainer>
    );
  }
}

export default ManagePlaylists;
