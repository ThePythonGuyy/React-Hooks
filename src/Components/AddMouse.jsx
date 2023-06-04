import React, {useState, useEffect} from 'react'
import HookMouse from "./HookMouse";
import { styled } from 'styled-components';

const AddMouse = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <Div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>

      {toggle && <HookMouse />}
    </Div>
  );
};

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button{
        width: 50px;
    }
    margin-top: 20px;
`
export default AddMouse;
