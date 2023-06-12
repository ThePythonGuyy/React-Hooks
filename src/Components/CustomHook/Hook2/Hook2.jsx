import React, {useState} from 'react'

const Hook2 = (initial=0, incV=0, decV=0) => {
    const [count, setCount] = useState(initial)

    const inc = () => {
        setCount(prev => prev + incV)
    }
    const dec = () => {
        setCount(prev => prev - decV)
    }

    const reset = () => {
        setCount(0)
    }
  return [count, inc, dec, reset]
}

export default Hook2
