import React from "react";

export default (props) => {
  
  return (

    <div>
      <h4>Passo:</h4>
      <input type="number" 
      value={props.passo} 
      onChange={e => props.onPassoChange(+e.target.value)} />
    </div>

  );
};