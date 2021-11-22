import React, { useState } from "react";
import Sub from './Sub'

export default (props) =>{
  
  const [text, setTexto] = useState('Valor:') 
  const [num, setNum] = useState(0) 

  function quandoClicar(valorGerado, text){
    setNum(valorGerado)
    setTexto(text)
    // console.log('Clicou !!!');
    // console.log(valorGerado);
    // console.log(text);
  }

  return (
    <div>
      <h4>{text} {num}</h4>
      <Sub clicar={quandoClicar}></Sub>
    </div>
    )
  } 