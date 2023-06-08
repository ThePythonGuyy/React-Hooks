import React, { useReducer } from 'react'
import { styled } from 'styled-components'

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'inc' :
            return state + 1
        case 'dec' : 
            return state - 1
        case 'reset':
            return initialState
        
        default : 
            return state
    }
    }

const UserReducer1 = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <Div>
      <span>UseReducer {'=>'} {count}</span>
      <div>
        <button onClick={() => dispatch('inc')}>++</button>
        <button onClick={() => dispatch('dec')}>--</button>
        <button onClick={() => dispatch('reset')}>reset</button>
      </div>
    </Div>
  )
  
}


const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
`

export default UserReducer1
