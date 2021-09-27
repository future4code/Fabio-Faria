import React from "react";

import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100px;
  width: 100vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <h1>LabeFY</h1>
        <ButtonContainer>
          <button onClick={() => this.props.changePage("managePlaylists")}>
            Manage Playlists
          </button>
          <button onClick={() => this.props.changePage("addPlaylist")}>
            Add Playlist
          </button>
        </ButtonContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
