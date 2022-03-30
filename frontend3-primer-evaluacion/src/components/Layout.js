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
    
    calcularOpciones = () => {
        return 1 + (etpa.length - 1) / 2;
    }

    handleClick = (e) => {
        this.setState({
            contador: 1,
        })

        //const llegoAlFinal = this.state.historial.length === (4);
        //if (llegoAlFinal)  this.reiniciar();

        const letra = e.toLowerCase();
        const cont = this.state.contador + 1 + letra;
        const idx = etpa.map(el => el.id).indexOf(cont);
        
        if (e === "A" || e === "B") {
            this.setState({
                contador: idx,
            })
            
            console.log(idx);
        }

        this.actualizoSeleccionPrevia(e);
        this.muestroHistorial(e);
    }

    reiniciar = () => {
        this.setState({ 
            contador: 0,
            historial: [],
            seleccionPrevia: "",
        });
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
                <h1 className="historia">{etpa[0].historia}</h1>
                <Opciones handleClick={this.handleClick} opcionA={etpa[0].opciones.a} opcionB={etpa[0].opciones.b}/>
                <Recordatorio seleccionPrevia={this.state.seleccionPrevia} historial={this.state.historial}/>
            </div>
        )
    }
}