import React from "react";
import styled from "styled-components";
import TrackCard from "./TrackCard";

const PlaylistDetailsContainer = styled.div`
  margin: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrackForm = styled.form`
  display: flex;
  width: 100vw;
  height: 100px;
  align-items: center;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
  }
`;

class PlaylistsDetails extends React.Component {
  state = {
    tracks: [
      {
        id: "5fdda5bc-40a4-4738-94fd-e81f7b0811f8",
        name: "Sacred Serenity",
        artist: "Death",
        url: "https://open.spotify.com/embed/track/3rMmexU24HEccEvMUuePhi",
      },
      {
        id: "38a00a34-ff4f-4afa-ab0d-b25f2bb2c133",
        name: "Pull Me Under",
        artist: "Dream Theater",
        url: "https://open.spotify.com/embed/track/5CPXR6lDTvngxtmMZxnWmC",
      },
      {
        id: "7afe8e47-ee2f-469b-a8dd-2a2e7fa43647",
        name: "The Alien",
        artist: "Dream Theater",
        url: "https://open.spotify.com/embed/track/1bAE0WgcyWzHKZdp0dYCXZ",
      },
    ],
  };
  render() {
    const tracks = this.state.tracks.map((track) => {
      return (
        <TrackCard
          key={track.id}
          trackName={track.name}
          artistName={track.artist}
          trackUrl={track.url}
        />
      );
    });

    return (
      <PlaylistDetailsContainer>
        <TrackForm>
          <div>
            <label htmlFor="Track name">Track Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="Artist Name">Artist</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="Url">URL</label>
            <input type="text" />
          </div>
          <button type="submit">Submit</button>
        </TrackForm>
        {tracks}
        <button onClick={() => this.props.changePage("playlist")}>
          Back to Playlist
        </button>
      </PlaylistDetailsContainer>
    );
  }
}

export default PlaylistsDetails;
