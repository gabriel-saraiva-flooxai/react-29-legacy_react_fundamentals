import React from "react";
import Membro from "./Membro";

export default props => (
    <div>
        <Membro nome='Rapha' sobrenome={props.sobrenome} />
        <Membro nome='Daniela' sobrenome={props.sobrenome} />
        <Membro nome='Pedrão' sobrenome={props.sobrenome} />
    </div>
)