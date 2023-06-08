// Default func()
import React, { useEffect, useState } from "react";

//components
import UseState from "./Components/useState/UseState";
import "./App.css";
import UseEffect from "./Components/useEffect/UseEffect";
import UserReducer from "./Components/UserReducer/UserReducer";
import UseContext from "./Components/useContext/UseContext";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  const [univ, setUniv] = useState(0);
  useEffect(() => {
    console.log(`Univ changed ${univ}`);
  });
  return (
    <>
      <div style={{ marginBottom: "10vw", padding: "0" }}>
        <UseState univ={univ} />

        <UseEffect univ={univ} setUniv={setUniv} />
        
        <UserContext.Provider value={"MERN"}>
          <ChannelContext.Provider value={"Stack"}>
            <UseContext />
          </ChannelContext.Provider>
        </UserContext.Provider>

        <UserReducer />
      </div>
    </>
  );
}

export default App;
