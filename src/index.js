import React from 'react';
import ReactDOM from 'react-dom';

import { Comp1, Comp2 as B } from './components/DoisComponentes';
import MultiElementos from './components/MultiElementos';
import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
import Membro from './components/Membro';
import ComponenteComFuncao from './components/ComponenteComFuncao';
import Pai from './components/Pai';

const elemento = document.getElementById('root')
ReactDOM.render(
  <div >
    <Pai />
    <Familia sobrenome='dos Santos' cep='Santos'>
      <Membro nome='Fabiana' />
      <Membro nome='Mariana' />
    </Familia>
    <ComponenteComFuncao />
  </div>
, elemento)