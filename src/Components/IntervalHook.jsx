import { useState, useEffect } from "react"
import React  from 'react'

const IntervalHook = () => {
    const [count, setCount] = useState(0)

    const tick = () => {
        // setCount((prev) => prev + 1)
        setCount(count + 1)
    }
    // const interval = setInterval(tick, 1)

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        // setTimeout(tick,1000)
        return () => {
            clearInterval(interval)
        }
    },[count])
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
      {count}
    </div>
  )
}

export default IntervalHook
