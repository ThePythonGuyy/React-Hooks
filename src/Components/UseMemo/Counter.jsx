import React, { useMemo, useState } from "react";
import { styled } from "styled-components";

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const inc1 = () => {
    setCount1(count1 + 1);
  };

  const inc2 = () => {
    setCount2(count2 + 1);
  };

  const evenodd1 = useMemo(() => {
    let i = 0,
      k = 0;
    while (k < 20) {
      while (i < 80000000) i++;
      i = 0;
      while (i < 80000000) i++;
      i = 0;
      while (i < 80000000) i++;
      i = 0;
      while (i < 80000000) i++;
      k++;
    }
    return count1 % 2;
  },[count1])

  return (
    <Div>
      <div>
        <button onClick={inc1}>count1 - {count1}</button>
        <span>{evenodd1 ? "odd" : "even"}</span>
      </div>
      <div>
        <button onClick={inc2}>count2 - {count2}</button>
      </div>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  div {
    display: flex;
    gap: 5px;
  }
`;
export default Counter;
