import React from "react";
import axios from "axios";

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
        <div key={mission.key}>
          <p>Mission: {mission.name}</p>
          <p>Details: {mission.description}</p>
          <a href={mission.twitter}>Link para Twitter</a>
          <hr />
        </div>
      );
    });
    return (
      <>
        <h1>SpaceX Missions API Rendered</h1>
        {missionList}
      </>
    );
  }
}

export default App;
