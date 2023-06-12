import React from 'react'
import { styled } from 'styled-components'
import Hook2 from './Hook2'

const Counter1 = () => {
    const [count, inc, dec, reset] = Hook2(0, 1, 1)
  return (
    <Div>
      Count1 - {count}
      <div>
      <button onClick={() => inc()}>inc</button>
      <button onClick={() => dec()}>dec</button>
      <button onClick={() => reset()}>reset</button>
      </div>
    </Div>
  )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10vh;
    div{
        display: flex;
        gap: 1.5vw;
    }
`;
export default Counter1
