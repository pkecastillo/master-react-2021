import React,{Component} from "react";

class EstilosEnLinea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        let age=39;
        // Se pueden colocar los Scripts de JS como JQuery
        const titulo={
            textAlign:'center',
            color:'yellow',
            backgroundColor:age>=37 ? 'orangered' : 'red'

        }

        return ( 
            <>
                <header>
                    <h1 style={titulo}>Titulo d Estilos en Linea</h1>
                </header>
            </>
         );
    }
}
 
export default EstilosEnLinea;