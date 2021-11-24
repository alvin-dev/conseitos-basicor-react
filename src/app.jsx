import './app.css'
import React from "react";

import Primeiro from './components/basicos/first.jsx'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/card'
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao-direta/Pai'
import Super from './components/comunicacao-direta/indireta/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
        <Card titulo="#01 Primeiro Componente" color="#6b4351">
            <Primeiro />
        </Card>

        <Card titulo="#02 Componente com Parametro" color="#983d3f">
            <ComParametro titulo="Opa" subtitulo="Epa" />
        </Card>

        <Card titulo="#03 Componente com Filhos" color="#efc15f">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#04 Componente com Repetição" color="#063354">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#05 Condicional v1" color="#2b7b62">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#06 Condicional v2" color="#6b4351">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>

        <Card titulo="#07 Comunicação Direta" color="#983d3f">
            <Pai sobrenome='Bezerra'></Pai>
        </Card>

        <Card titulo="#08 Comunicação Indireta" color="#efc15f">
            <Super></Super>
        </Card>

        <Card titulo="#09 input" color="#063354">
            <Input></Input>
        </Card>
        
        <Card titulo="#10 Contador" color="#2b7b62">
            <Contador passo={10} valor={100}></Contador>
        </Card>
        </div>
        
    </div>
);