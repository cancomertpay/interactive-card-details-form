import React, { useContext } from 'react'
import { CardContext } from '../../store/CardContext'

function Button({children , ...rest}) {
  const {error} = useContext(CardContext);

  return (
    <button type='submit' className='button' disabled={error.length > 0} {...rest}>{children}</button>
  )
}

export default Button