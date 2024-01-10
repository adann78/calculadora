import { useState } from 'react'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'

import './App.css'


function App() {
  const [input, setInput]=useState('')
  const agregarInput=val=>{
    setInput(input+val);
  }
  /*
  const calcularResultado=()=>{
    if(input){
      setInput(evaluate(input))
    }else{
      alert("Por favor ingrese valores para hacer calculos...")
    }
    
  }
*/
const calcularResultado = () => {
  if (input) {
      try {
          // Utilizar la función eval para evaluar la expresión
          const resultado = eval(input);
          
          // Comprobar si el resultado es un número válido
          if (typeof resultado === 'number' && !isNaN(resultado)) {
              setInput(resultado.toString());
          } else {
              throw new Error('Expresión no válida');
          }
      } catch (error) {
          alert('Error al evaluar la expresión');
      }
  } else {
      alert('Por favor, ingrese valores para hacer cálculos...');
  }
};
  return (
    <>
    <h1 className='titulo'>Calculadora hecha por el Ing. Adan</h1>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton></div>
        <div className='fila'> 
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton></div>
        <div className='fila'> 
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton></div>
        <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')}>Clear</BotonClear>
        </div>
      </div>
      
    </>
    
      
    
  )
}

export default App
