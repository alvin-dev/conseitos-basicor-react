import './app.css'
import React from "react";

import Primeiro from './components/first.jsx'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/card'
import Repeticao from './components/Repeticao';


// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
<div className="App">

<Card titulo="#01 Primeiro Componente">
    <Primeiro/>
</Card>

<Card titulo="#02 Componente com Parametro">
    <ComParametro titulo="Opa" subtitulo="Epa" />
</Card>

<Card titulo="#03 Componente com Filhos">
    <ComFilhos>
        <ul>
        <li>Ana</li>
        <li>Bia</li>
        <li>Carlos</li>
        <li>Daniel</li>
        </ul>
    </ComFilhos>
</Card>

<Card titulo="#04 Componente com Repetição">
    <Repeticao></Repeticao>
</Card>



</div>
);