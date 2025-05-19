import React, { Component } from "react";

export default class ComponenteClasse extends Component {
    render() {
        return (
            <h1>
                {this.props.texto || 'Mensagem padrão do Componente de Classe'}
            </h1>
        )
    }
}