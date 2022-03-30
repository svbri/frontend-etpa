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

        this.handleClick = this.handleClick.bind(this);
    }
    
    // calcularOpciones = () => {
    //     return 1 + (etpa.length - 1) / 2;
    // }

    handleClick = (e) => {
        const letra = e.toLowerCase();
        const cont = this.state.historial.length;
        
        const llegoAlFinal = this.state.historial.length === 4;
        if (llegoAlFinal) this.reiniciar();
        else {
            this.setState({
                contador: 1,
            });

            if (this.state.contador > 1 && e === "A"){
                const idx = etpa.map(el => el.id).indexOf(cont + 1 + letra);
                this.setState({
                    contador: idx,
                });
            } else if (this.state.contador === 1 || e === "B") {
                const id = etpa.map(el => el.id).indexOf(cont + 2 + letra);
                this.setState({
                    contador: id,
                });
            }

            this.actualizoSeleccionPrevia(e);
            this.muestroHistorial(e);
        }
    }

    reiniciar = () => {
        this.setState({ 
            contador: 0,
            historial: [],
            seleccionPrevia: "",
        });

        alert("Fin");
    }

    actualizoSeleccionPrevia = (a) => {
        this.setState({
            seleccionPrevia: a,
        });
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