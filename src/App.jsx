// Default func()
import React, { useEffect, useState } from "react";

//components
import UseState from "./Components/UseState";
import "./App.css";
import UseEffect from "./Components/UseEffect";
import AddMouse from "./Components/AddMouse";
import IntervalHook from "./Components/IntervalHook";
import FetchData from "./Components/FetchData";
import ContextHook1 from "./Components/ContextHook1";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  const [univ, setUniv] = useState(0);
  useEffect(() => {
    console.log(`Univ changed ${univ}`);
  });
  return (
    <>
      <div style={{ margin: "0", padding: "0" }}>
        <UseState univ={univ} />
        <UseEffect univ={univ} setUniv={setUniv} />
        <AddMouse />
        <IntervalHook />
        <FetchData />
        <UserContext.Provider value={'MERN'}>
          <ChannelContext.Provider value={'Stack'}>
            <ContextHook1 />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
