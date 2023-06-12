import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  });

  return (
    <Div>
      <div>
        Hook Timer - {timer}
        <button onClick={() => clearInterval(intervalRef.current)}>stop timer</button>
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  align-items: center;
  gap: 10px;

  div {
    display: flex;
    gap: 5px;
  }
`;
export default HookTimer;
