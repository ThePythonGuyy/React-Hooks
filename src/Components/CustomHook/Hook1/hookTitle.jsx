import React, { useEffect } from 'react'

const useHookTitle = (count) => {
  return (
    useEffect(() => {
        document.title=count;
    },[count])
  )
}

export default useHookTitle
