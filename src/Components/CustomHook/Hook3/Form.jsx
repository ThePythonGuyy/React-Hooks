import React from 'react'
import { styled } from 'styled-components'
import Hook3 from './Hook3'

const Form = () => {
    const [firstname, firstnameBind, firstnameReset] = Hook3('')
    const [lastname, lastnameBind, lastnameReset] = Hook3('')

    const handleForm = (e) => {
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        lastnameReset()
        firstnameReset()
    }
  return (
    <Div>
      <form onSubmit={handleForm}>

        <input type="text" {...firstnameBind} placeholder='firstname'/>
        <input type="text" {...lastnameBind} placeholder='lastname' />
        <button type='submit'>submit</button>
      </form>

      <div>
        <span>firstname - {firstname}</span>
        <span>lastname - {lastname}</span>
      </div>
    </Div>
  )

}

const Div = styled.div`
margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;

        button{
            width: 45px;
        }
        
    }

    div{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
    }
`;
export default Form
