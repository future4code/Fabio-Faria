import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;

const NameContainer = styled.p`
  margin: 5px;
`;

const DeleteButtonContainer = styled.p`
  color: red;
`;

class PlaylistCard extends React.Component {
  render() {
    return (
      <PlaylistCardContainer>
        <button onClick={() => this.props.changePage("playlistsDetails")}>
          Playlist Details
        </button>
        <NameContainer>{this.props.name}</NameContainer>
        <DeleteButtonContainer>X</DeleteButtonContainer>
      </PlaylistCardContainer>
    );
  }
}

export default PlaylistCard;
