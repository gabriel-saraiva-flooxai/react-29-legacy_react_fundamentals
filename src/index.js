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
    <Familia>
      <Membro nome='Daniel' sobrenome='Pereira' />
      <Membro nome='Mariana' sobrenome='Pereira' />
    </Familia>
    <Familia>
      <Membro nome='Era só mais um' sobrenome='Silva' />
      <Membro nome='Q a estrela ñ' sobrenome='Brilha' />
    </Familia>
  </div>
, elemento)