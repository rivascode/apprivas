import React from 'react'
import './NavLink.css'

export const NavLink = (props) => {
    
  function handlerEvent(){
      console.log("click");
  }
  return (
    <li onClick={handlerEvent}>{props.title}</li>
  )
}

//Children permite incluir por otro método que no sea props un componente dentro de otro.