import React, { useState } from 'react'

import useHookTitle from './hookTitle'

const DocTitle2 = () => {
    const [title, setTitle] = useState(0)
    useHookTitle(title)
  return (
    <div>
      <button onClick={()=>{setTitle(title+1)}}>Title2 - {title}</button>
    </div>
  )
}

export default DocTitle2
