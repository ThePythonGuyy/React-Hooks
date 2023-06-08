import React, { useReducer } from "react";
import { styled } from "styled-components";

const initialState = {
  counter1: 0,
  counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, counter1: state.counter1 + action.value };
    case "dec":
      return { ...state, counter1: state.counter1 - action.value };
    case "reset":
      return {...state, counter1:initialState.counter1};

    case "inc2":
      return { ...state, counter2: state.counter2 + action.value };
    case "dec2":
      return { ...state, counter2: state.counter2 - action.value };
    case "reset2":
      return {...state, counter2:initialState.counter2};

    default:
      return state;
  }
};

const UserReducer2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <Div>
      <span>
        UseReducer1 {"=>"} {count.counter1}
      </span>
      <div>
        <button onClick={() => dispatch({ type: "inc", value: 5 })}>++5</button>
        <button onClick={() => dispatch({ type: "dec", value: 5 })}>--5</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>

      <span>
        UseReducer2 {"=>"} {count.counter2}
      </span>
      <div>
        <button onClick={() => dispatch({ type: "inc2", value: 10 })}>
          ++10
        </button>
        <button onClick={() => dispatch({ type: "dec2", value: 10 })}>
          --10
        </button>
        <button onClick={() => dispatch({ type: "reset2" })}>reset</button>
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-bottom: 5vh;
  }
`;

export default UserReducer2;
