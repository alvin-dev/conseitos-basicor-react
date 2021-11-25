import React, {useState} from "react";

export default (props) => {

  const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))

  function gerarNumeroNãoContido(array){
    const min = 1
    const max = 60
    const novoNumero = Math.floor(Math.random() * (max - min)) + min
    return array.includes(novoNumero) ? gerarNumeroNãoContido(array) : novoNumero
  }

  function gerarNumero() {
    
    setNumeros([1, 2, 3, 4, 5, 6, 7, 8])
  } 

  return (
    <div>
      <h3>Mega</h3>
      <h4>{numeros.join(' . ')}</h4>
      <button onClick={gerarNumero}>Gerar Números</button>
    </div>

  )
}
