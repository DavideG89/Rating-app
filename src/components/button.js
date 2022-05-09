import React from 'react'

const Button = (props) => {

  const handleClick = () => {
    props.setSubmitted(true)
  }
  return (
    <button type="submit" className='button'  onClick={handleClick} >{props.text}</button>
  )
}


export default Button