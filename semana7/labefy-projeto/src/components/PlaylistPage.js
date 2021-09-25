import React from "react";

class PlaylistPage extends React.Component {
  render() {
    const renderPlaylists = this.props.playlists.map((playlist) => {
      return (
        <p key={playlist.id}>
          {playlist.name}
          <button onClick={() => this.props.deletePlaylist(playlist.id)}>
            X
          </button>
          <button onClick={() => this.props.getPlaylistTracks(playlist.id)}>
            Musics
          </button>
        </p>
      );
    });
    return (
      <div>
        {renderPlaylists}
        <div>
          <input
            type="text"
            onChange={this.props.changePlaylistValue}
            value={this.props.playlistValue}
          />
          <button onClick={this.props.createPlaylist}>Create Playlist</button>
          {this.props.trackList}
        </div>
      </div>
    );
  }
}

export default PlaylistPage;
