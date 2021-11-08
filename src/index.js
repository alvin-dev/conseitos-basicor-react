import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/first.jsx'
import ComParametro from './components/ComParametro'

ReactDOM.render(
  <div>
  <Primeiro></Primeiro>
  <ComParametro></ComParametro>
  </div>,
  document.getElementById('root')
)