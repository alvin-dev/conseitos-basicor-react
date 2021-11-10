import React from "react";
import './card.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  <div className="Card">
    <div className="Conteudo">
      {props.children}
    </div>
    <div className="Footer">
      {props.titulo}
    </div>
  </div>