import React, { Component } from "react";

export default class Contador extends Component {

    maisUm() {
        this.props.numero++
    }

    menosUm() {
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