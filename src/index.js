import React from 'react';
import ReactDOM from 'react-dom';

import Primeiro from './components/PrimeiroComponente';

const elemento = document.getElementById('root')
ReactDOM.render(
  <Primeiro txt='Primeiro Componente com props denovo' />
, elemento)