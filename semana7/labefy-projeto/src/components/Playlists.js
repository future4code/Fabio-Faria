import React from "react";
import styled from "styled-components";
import PlaylistCard from "./PlaylistCard";

const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;

class Playlists extends React.Component {
  state = {
    playlist: [
      {
        id: "e6a687b0-37af-41b2-a98b-b845460799e5",
        name: "Nova",
      },
      {
        id: "a15af520-58f0-4701-a490-e5d574ff0d53",
        name: "metal",
      },
    ],
  };
  render() {
    const playlists = this.state.playlist.map((playlist) => {
      return (
        <PlaylistCard
          name={playlist.name}
          changePage={this.props.changePage}
          key={playlist.id}
        />
      );
    });

    return <PlaylistsContainer>{playlists}</PlaylistsContainer>;
  }
}

export default Playlists;
