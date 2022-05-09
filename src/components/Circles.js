import React from 'react'

function Circles (props) {

  // const geTheNumber = () =>{
  //   setSelectedNum(props.number)
  // }

  return (
    <button  onClick={() => props.setValue(props.number)}className='circle' value={props.name} >{props.number}</button>
  )
}


export default Circles