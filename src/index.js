import React from 'react';
import ReactDOM from 'react-dom';

import { Comp1, Comp2 as B } from './components/DoisComponentes';
import MultiElementos from './components/MultiElementos';

const elemento = document.getElementById('root')
ReactDOM.render(
  <div >
    <MultiElementos />
  </div>
, elemento)