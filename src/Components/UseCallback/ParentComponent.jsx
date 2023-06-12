import React, { useCallback, useState } from "react";
import Count from "./Count";
import Button from "./Button";
import { styled } from "styled-components";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(21);
  const [sal, setSal] = useState(200000);

  const incAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incSal = useCallback(() => {
    setSal(sal + 50000);
  }, [sal]);

  return (
    <Div>
      <Title />
      <div>
        <Count text="Age" value={age} />
        <Button text="Age" handleClick={incAge} />
      </div>
      <div>
        <Count text="Salary" value={sal} />
        <Button text="Salary" handleClick={incSal} />
      </div>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;
export default React.memo(ParentComponent);
