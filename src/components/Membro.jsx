import React from "react";

export default props => 
    <div>
        {props.nome}
        <strong> {props.sobrenome} </strong>
        <strong> CEP: {props.cep} </strong>
    </div>