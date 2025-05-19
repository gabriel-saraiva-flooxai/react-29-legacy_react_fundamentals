import React, { Component } from "react";

export default class Contador extends Component {
    
    maisUm = () => {
        this.props.numero++
        console.log(this);
    }
    
    menosUm = () => {
        console.log(this);
        this.props.numero--
    }
    
    render() {
        return (
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
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