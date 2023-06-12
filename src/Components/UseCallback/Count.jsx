import React from 'react'

const Count = (props) => {
    console.log(`${props.text}count is being rendered`)
  return (
    <div>
      <span>My {props.text} is {props.value}  </span>
    </div>
  )
}

export default React.memo(Count)
