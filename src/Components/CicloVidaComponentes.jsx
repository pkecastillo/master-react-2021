import React,{Component} from "react";
class CicloVidaComponentes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre:'Alberto',
            evento:null
         }
    }

    // Ejemplo de actualizacion
    cambiarNombre(){
        if(this.state.nombre !== 'Carlos')
        this.setState({nombre:'Carlos'})
        else
        this.setState({nombre:'Alberto'})
    }

    // Montamos el componente(eventos,peticiones http)
    componentDidMount(){
        this.state.evento=window.addEventListener('resize',()=>{
            console.log(window.innerWidth);
        })
    }
    // Actualizacion del componente(actualizaciones)
    componentDidUpdate(prevProps,prevState){
        if(prevState===this.state.nombre){
            console.log('Mi estado no ha cambiado');
        }else{
            console.log('El estado SI a cambiado');
        }
    }
    // Desmontaje del componente (limpiamos eventos y timers)
    componentWillUnmount(){
        window.removeEventListener(this.state.evento)
    }

    render() { 
        return ( 
            <>
                <h2>{this.state.nombre}</h2>
                <button onClick={this.cambiarNombre.bind(this)}>Cambiar Nombre</button>
            </>
         );
    }
}
 

export default CicloVidaComponentes;