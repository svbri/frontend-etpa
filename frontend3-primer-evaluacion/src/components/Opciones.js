import React, {Component} from "react";

export default class Opciones extends Component {
    render() {
        return(
            <div className="opciones">
                <div className = "opcion">
                    <button onClick={() => this.props.handleClick("A")} id="A" className="botones">A</button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div className = "opcion">
                    <button onClick={() => this.props.handleClick("B")} id="B" className="botones">B</button>
                    <h2>{this.props.opcionB}</h2>
                </div>
            </div>
        )
    }
}