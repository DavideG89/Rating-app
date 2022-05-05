import React from 'react'

const Button = ({text}) => {
  return (
    <button className='button'>{text}</button>
  )
}

Button.defaultProps= {
    text: 'Submit'
}
export default Button