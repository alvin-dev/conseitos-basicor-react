import React from "react";

export default (props) => {

  function acao(){
    props.clicar(Math.random().toFixed(2) *100, 'Gerado:')
  }

  return (
    <div>
      <button onClick={acao}>Alterar</button>
    </div>

  )
}
