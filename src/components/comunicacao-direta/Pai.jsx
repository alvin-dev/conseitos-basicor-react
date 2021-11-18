import React from "react";
import Filho from './Filho'

export default props => 
  <div>
    <Filho {...props}>João</Filho>
    <Filho sobrenome={props.sobrenome}>Mari</Filho>
    <Filho sobrenome='Guedes'>Pedro</Filho>
  </div>