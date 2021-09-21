import React from "react"

//Ejemplo de Componente de Clase

class MiPrimerComponente extends React.Component {
    constructor(props){
        this.state = {
            apellido: "Lopez"
        }
    }
    render(){
        return (
        <div>
            <p>Este es el primer componente creado por {this.props.nombre} {this.state.apellido}</p>
        </div>)
    }
}

export default MiPrimerComponente;