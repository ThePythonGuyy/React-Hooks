import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";

const FocusRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Div>
      <input ref={inputRef} type="text" />
      {/* <span></span> */}
    </Div>
  );
};

const Div = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  input{
    padding: 2px 5px;
  }
`;
export default FocusRef;
