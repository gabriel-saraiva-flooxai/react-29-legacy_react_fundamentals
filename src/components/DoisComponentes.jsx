import React from "react";

const Comp1 = props => (
    <h1>Primeiro diz: {props.valor}</h1>
)

const Comp2 = props => (
    <h1>Segundo diz: {props.valor}</h1>
)

export { Comp1, Comp2 }