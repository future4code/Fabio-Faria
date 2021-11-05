import GlobalStateContext from "./GlobalStateContext";
// import axios from "axios";
// import { BASE_URL } from "./constants";
import { useState } from "react";

const GlobalState = (props) => {
  const [feedPosts, setFeedPosts] = useState([]);

  const data = { feedPosts, setFeedPosts };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
