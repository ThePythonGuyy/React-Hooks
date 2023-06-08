import React, { useContext, useReducer } from "react";

import UserReducer1 from "./UserReducer1";
import UserReducer2 from "./UserReducer2";
import ComponentA from "./sub/ComponentA"
import ComponentB from "./sub/ComponentB"
import { styled } from "styled-components";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, counter: state.counter + 5 };

    case "dec":
      return { ...state, counter: state.counter - 5 };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export const Context = React.createContext();

const UserReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <Div>
      <UserReducer1 />
      <UserReducer2 />
      
      <div>
        <span>{count.counter}</span>
      <Context.Provider value={{count,dispatch}}>
            <ComponentA />
            <ComponentB />
      </Context.Provider>
      </div>
    </Div>
  );
};

const Div = styled.div`

    display: flex;
    flex-direction: column ;
    
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 7px;

        button{
            width: 50px;
        }
    }
`

export default UserReducer;
