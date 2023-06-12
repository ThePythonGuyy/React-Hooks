import React from 'react'

const Button = (props) => {
    console.log('button is being rendered')
  return (
    <div>
      <button onClick={() => props.handleClick()}>Inc {props.text}</button>
    </div>
  )
}

export default React.memo(Button)
