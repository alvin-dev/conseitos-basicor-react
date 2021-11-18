import React from "react";

export default (props) => {

  return (
    <div>
      <button onClick={() => {
        props.clicar(Math.random())
      }}>Alterar</button>
    </div>

  )
}
