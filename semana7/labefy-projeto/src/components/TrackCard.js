import React from "react";
import styled from "styled-components";

const TrackCardContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const TrackContainer = styled.h4`
  margin: 10px;
`;

const ArtistContainer = styled.p`
  margin-right: 10px;
`;

const DeleteButton = styled.p`
  color: red;
`;

class TrackCard extends React.Component {
  render() {
    return (
      <TrackCardContainer>
        <div>
          <TrackContainer>{this.props.trackName} </TrackContainer>
          <ArtistContainer>{this.props.artistName}</ArtistContainer>
          <DeleteButton>X</DeleteButton>
        </div>
        <iframe
          title={this.props.name}
          src={this.props.trackUrl}
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </TrackCardContainer>
    );
  }
}

export default TrackCard;
