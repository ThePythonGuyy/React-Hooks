import React from "react";

import UseEffect1 from "./UseEffect1";
import AddMouse from "./AddMouse";
import IntervalHook from "./IntervalHook";
import FetchData from "./FetchData";

const UseEffect = (props) => {
  return (
    <div>
        
      <UseEffect1 univ={props.univ} setUniv={props.setUniv} />

      <AddMouse />
      <IntervalHook />
      <FetchData />
    </div>
  );
};

export default UseEffect;
