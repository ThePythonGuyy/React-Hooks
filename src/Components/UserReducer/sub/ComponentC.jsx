import React, { useContext } from 'react'
import { Context } from '../UserReducer'


const ComponentC = () => {
  const UserContext = useContext(Context)
 
  return (
    <div>
      Component_C
      <button onClick={() => UserContext.dispatch({type:'inc'})}>inc</button>
      <button onClick={() => UserContext.dispatch({type:'dec'})}>dec</button>
      <button onClick={() => UserContext.dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default ComponentC
