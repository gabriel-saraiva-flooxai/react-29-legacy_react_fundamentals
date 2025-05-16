import React from "react";

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Júlia']

export default props => {

    let num = Math.random()

    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {num}
            {gerarItens(aprovados)}
        </ul>
    )
}

// QND precisar de estado = componente com CLASSE
// componente sem estado, só precisa de props = componente aseade em FUNÇÃO