import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

const UseState = () => {
  const [count, setCount] = useState(0);
  const initialState = 0;
  const [count1, setCount1] = useState(initialState);
  const [name, setName] = useState({ fstName: "", lstName: "" });

  const incFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount1((prevState) => prevState + 1);
    }
  };

  return (
    <Div>
      <Div1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count {count}
        </button>
      </Div1>

      <Div2>
        <span>count {count1}</span>
        <button onClick={() => setCount1((prevState) => prevState + 1)}>
          Inc
        </button>
        <button onClick={() => setCount1((prevState) => prevState - 1)}>
          Dec
        </button>
        <button onClick={() => setCount1(initialState)}>Reset</button>
        <button onClick={incFive}>incFive</button>
      </Div2>

      <Form>
        <input
          type="text"
          placeholder="Firstname"
          value={name.fstName}
          onChange={(e) => setName({ ...name, fstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Lastname"
          value={name.lstName}
          onChange={(e) => setName({ ...name, lstName: e.target.value })}
        />

        <h2>Your first name is - {name.fstName}</h2>
        <h2>Your last name is - {name.lstName}</h2>
      </Form>
    </Div>
  );
};

export default UseState;

const Div = styled.div`
  width: 100%;
  margin-top: 25px;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Div1 = styled.div``;

const Div2 = styled.div`
  display: flex;
  gap: 5px;
  span {
    margin-right: 10px;
  }
`;

const Form = styled.form`
  input{
    margin-left: 10px;
  }
`;
