import React from "react";
import Sub from './Sub'

export default (props) =>{

  function quandoClicar(valorGerado){
    console.log('Clicou !!!');
    console.log(valorGerado);
  }

  return (
    <div>
      <h4>Valor</h4>
      <Sub clicar={quandoClicar}></Sub>
    </div>
    )
  } 