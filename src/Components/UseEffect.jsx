import React, { useEffect, useState } from 'react'
import { styled } from "styled-components";
const UseEffect = (props) => {

    const [count, setCount] = useState(0)
    const [test, setTest] = useState(0)
    useEffect(() => {
        console.log('Re-redered')
    }) // called at each re-render

    useEffect(() => {
        document.title = `Click ${count}`
        console.log(`count changed`)
    },[count])  // called only when count state is changed

    return (
    <Div>
      <button onClick={() => setCount((prevState) => prevState + 1)}>click {count}</button>
      <button onClick={() => setTest((prevState) => prevState + 1)}>Click me</button>
      <button onClick={() => props.setUniv((prevState) => prevState + 1)}>Univ {props.univ}</button>
    </Div>
  )
}


const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
    button{
        width: 70px;
    }
  
`

export default UseEffect
