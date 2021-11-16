import './app.css'
import React from "react";

import Primeiro from './components/basicos/first.jsx'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/card'
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <div className="App">

        <Card titulo="#01 Primeiro Componente">
            <Primeiro />
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

        <Card titulo="#05 Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#06 Condicional v2">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>



    </div>
);