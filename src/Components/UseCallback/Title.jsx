import React from 'react'

const Title = () => {
    console.log('title is being rendered')
  return (
    <div>
      Welcome to useCallback Hook
    </div>
  )
}

export default React.memo(Title)
