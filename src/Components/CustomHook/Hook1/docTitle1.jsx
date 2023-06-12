import React, { useState } from 'react'
import useHookTitle from './hookTitle'


const DocTitle1 = () => {
    const [title, setTitle] = useState(0)

    useHookTitle(title)

  return (
    <div>
      <button onClick={()=>{setTitle(title+1)}}>Title1 - {title}</button>
    </div>
  )
}

export default DocTitle1
