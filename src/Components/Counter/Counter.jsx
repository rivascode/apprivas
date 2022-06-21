import React, {useState} from 'react'
import { PropTypes } from 'prop-types'
export const CounterApp = ({value,stock}) => {
  const [counter,setCounter]=useState(value);
  const sumar = ()=>{
      if(counter<stock)
          setCounter(counter+1);
  }
  
  const restar = ()=>{
      if(counter>value)
        setCounter(counter-1);
  }  
  console.log(counter,stock,value);
  return (
      <div>
          <h1>CounterApp</h1>
          <h2>{counter}</h2>
          <div className="contenedorBotones">
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
          </div>
      </div>
  )

  CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired
  } 
}
