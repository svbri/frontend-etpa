import React, {Component} from "react";
import etpa from "./data.json";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";

export default class Layout extends Component {
    constructor(props){
        super(props);

        this.state = {
            contador: 0,
            historial: [],
            seleccionPrevia: "",
        };
    }
    
    handleClick = (e) => {
        if (e === "A"){
            if (this.state.contador % 2 === 0){
                this.setState({
                    contador: this.state.contador + 1,
                })
            } else {
                this.setState({
                    contador: this.state.contador + 2,
                })
            }

        } else if (e === "B"){
            if (this.state.contador % 2 === 0){
                this.setState({
                    contador: this.state.contador + 2,
                })
            } else {
                this.setState({
                    contador: this.state.contador + 1,
                })
            }
        }
        this.actualizoSeleccionPrevia(e);
        this.muestroHistorial(e);
        console.log(this.state.contador);
    }

    actualizoSeleccionPrevia = (a) => {
        this.setState({
            seleccionPrevia: a,
        })
    }
    
    muestroHistorial = (e) => {
        this.setState({
            historial: [...this.state.historial, e],
        });
    }

    render() {
        return(
            <div className="layout">
                <h1 className="historia">{etpa[this.state.contador].historia}</h1>
                <Opciones handleClick={this.handleClick} opcionA={etpa[this.state.contador].opciones.a} opcionB={etpa[this.state.contador].opciones.b}/>
                <Recordatorio seleccionPrevia={this.state.seleccionPrevia} historial={this.state.historial}/>
            </div>
        )
    }
}