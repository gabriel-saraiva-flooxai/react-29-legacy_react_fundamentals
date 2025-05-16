import React from 'react';
import ReactDOM from 'react-dom';

import { Comp1, Comp2 as B } from './components/DoisComponentes';

const elemento = document.getElementById('root')
ReactDOM.render(
  <div >
    <Comp1 valor='asdfghjklç'/>
    <B valor='qwertyuiop'/>
  </div>
, elemento)