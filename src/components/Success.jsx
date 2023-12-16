import React, { useContext } from 'react'
import successImg from "../assets/images/icon-complete.svg"
import Button from "./UI/Button.jsx"
import { CardContext } from '../store/CardContext.jsx'

function Success() {
  const {setSuccess} = useContext(CardContext);

  return (
    <div className='success-container'>
      <div>
        <img src={successImg} alt="complete-icon" />
      </div>
      <div>
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
      </div>
      <Button onClick={() => setSuccess(false)}>Continue</Button>
    </div>
  )
}

export default Success