import React from "react";
import styled from "styled-components";
import axios from "axios";

const PlaylistCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;

const FormContainer = styled.form`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

//axios consts

class AddPlaylist extends React.Component {
  state = {
    playlistValueName: "",
  };

  onChangePlaylistName = (e) => {
    this.setState({ playlistValueName: e.target.value });
  };

  handleCreatePlaylist = async () => {
    // e.event.preventDefault();
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.playlistValueName,
    };
    const res = await axios.post(url, body, {
      headers: {
        Authorization: "fabio-faria-maryam",
      },
    });
    try {
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <PlaylistCreationContainer>
          <h1>Create a New Playlist</h1>
          <FormContainer onSubmit={this.handleCreatePlaylist}>
            <label htmlFor="New Playlist">New Playlist</label>
            <input
              value={this.state.playlisValuetName}
              onChange={this.onChangePlaylistName}
              type="text"
              placeholder="Playlist Name"
            />
            <button type="submit">Submit</button>
          </FormContainer>
        </PlaylistCreationContainer>
      </div>
    );
  }
}

export default AddPlaylist;
