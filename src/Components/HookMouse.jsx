import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
const HookMouse = () => {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)  

  const mousePos = (e) => {
    console.log('mousePos called')
    setX(e.clientX)
    setY(e.clientY)

  }

  useEffect(() => {
    console.log('use effect called')
    window.addEventListener('mousemove', mousePos)
    return () => {
        console.log('Component removed')
        window.removeEventListener('mousemove', mousePos)
    }
  },[])

  return (
    <Div>
      Mouse X - {x} Mouse Y - {y}
    </Div>
  )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
`

export default HookMouse
