import React from "react";
import axios from "axios";
import styled from "styled-components";

const GeneralStyling = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #031926;
  color: #f4e9cd;
  box-sizing: border-box;

  h1 {
    margin-left: 30%;
  }
  a {
    color: #ebe374;
    text-decoration: none;
  }
`;

const MissionContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;

class App extends React.Component {
  state = {
    missions: [],
  };

  componentDidMount() {
    this.getAllMissions();
  }

  getAllMissions = async () => {
    const url = "https://api.spacexdata.com/v3/missions";
    try {
      const res = await axios.get(url);
      this.setState({ missions: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const missionList = this.state.missions.map((mission) => {
      return (
        <MissionContainers key={mission.mission_id}>
          <p>Mission: {mission.mission_name}</p>
          <p>Details: {mission.description}</p>
          <a href={mission.twitter}>Link para Twitter</a>
          <hr />
        </MissionContainers>
      );
    });
    return (
      <GeneralStyling>
        <h1>SpaceX Missions API Rendered</h1>
        {missionList}
      </GeneralStyling>
    );
  }
}

export default App;
