import React from "react";
import axios from "axios";
import styled from "styled-components";
import PlaylistPage from "./components/PlaylistPage";

const PlayLists = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  border: 1px solid black;
`;

class App extends React.Component {
  state = {
    playlists: [],
    tracks: [],
    playlistCreatorValue: "",
  };
  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const res = await axios.get(url, {
      headers: {
        Authorization: "fabio-faria-maryam",
      },
    });
    try {
      this.setState({ playlists: res.data.result.list });
      console.log(res.data.result.list);
    } catch (err) {
      console.log(err);
    }
  };

  submitPlaylist = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.playlistCreatorValue,
    };
    const res = await axios.post(url, body, {
      headers: {
        Authorization: "fabio-faria-maryam",
      },
    });
    try {
      this.getAllPlaylists();
      console.log(res.data.result.list);
    } catch (err) {
      console.log(err);
    }
  };

  deletePlaylist = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    const res = await axios.delete(url, {
      headers: {
        Authorization: "fabio-faria-maryam",
      },
    });
    try {
      this.getAllPlaylists();
      console.log(res.data.result.list);
    } catch (err) {
      console.log(err);
    }
  };

  getPlaylistTracks = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const res = await axios.get(url, {
      headers: {
        Authorization: "fabio-faria-maryam",
      },
    });
    try {
      this.setState({ tracks: res.data.result.tracks });
      console.log(res.data.result.tracks);
    } catch (err) {
      console.log(err);
    }
  };

  changePlaylistCreatorValue = (e) => {
    this.setState({ playlistCreatorValue: e.target.value });
  };

  render() {
    const tracksList = this.state.tracks.map((track) => {
      return (
        <div key={track.id}>
          <h4>{track.name}</h4>
          <h4>{track.artist}</h4>
          <iframe
            title={track.name}
            src={track.url}
            width="70%"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      );
    });
    return (
      <PlayLists>
        <PlaylistPage
          playlists={this.state.playlists}
          playlistValue={this.state.playlistCreatorValue}
          createPlaylist={this.submitPlaylist}
          changePlaylistValue={this.changePlaylistCreatorValue}
          deletePlaylist={this.deletePlaylist}
          getPlaylistTracks={this.getPlaylistTracks}
          trackList={tracksList}
        />
      </PlayLists>
    );
  }
}

export default App;
