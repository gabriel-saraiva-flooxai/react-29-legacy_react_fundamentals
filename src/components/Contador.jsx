import React, { Component } from "react";

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }
    
    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }
    
    menosUm = () => {
        this.alterarNumero(-1)
    }
    
    alterarNumero = (diferenca) => {
        this.setState({ numero: this.state.numero + diferenca })
    }
    
    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                    <button onClick={() => this.alterarNumero(27)}>Inc27</button>
                    <button onClick={() => this.alterarNumero(-13)}>Dec13</button>
            </div>
        )
    }
}

// Solução 01 - Bind
// constructor(props) {
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    //     this.menosUm = this.menosUm.bind(this)
    // }
    
    // Solução 02 - Função Arrow (onClick)
    // <button onClick={() => this.maisUm()}>Inc</button>
    
    // Solução 03 - Função Arrow
    // maisUm = () => {
    //     // this.props.numero++
    //     console.log(this);
    // }