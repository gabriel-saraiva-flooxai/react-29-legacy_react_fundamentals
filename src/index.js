import React from 'react';
import ReactDOM from 'react-dom';

import { Comp1, Comp2 as B } from './components/DoisComponentes';
import MultiElementos from './components/MultiElementos';
import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
import Membro from './components/Membro';

const elemento = document.getElementById('root')
ReactDOM.render(
  <div >
    <Familia sobrenome='dos Santos'>
      <Membro nome='Fabiana' />
      <Membro nome='Mariana' />
    </Familia>
    <FamiliaSilva sobrenome='Silva via props' />
  </div>
, elemento)