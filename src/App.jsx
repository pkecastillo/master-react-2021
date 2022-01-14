import React from 'react'
import logo from './logo.svg';
import './App.css';
// import PrimerComponente from './Components/PrimerComponente';
// import Props from './Components/Props';
// import State from './Components/State';
// import EstilosTradicionales from './Components/EstilosTradicionales';
// import EstilosEnLinea from './Components/EstilosEnLinea';
// import EstilosEnModulo from './Components/EstilosEnModulo';
// import EstilosConStyled from './Components/EstilosConStyled';
// import Refs from './Components/Refs';
// import CicloVidaComponentes from './Components/CicloVidaComponentes';
// import Hooks from './Components/Hooks';
// import Formularios from './Components/Formularios';
// import Eventos from './Components/Eventos';
// import RenderizadoCondicional from './Components/RenderizadoCondicional';
// import SpreadOperator from './Components/SpreadOperator';
// import IterandoArraysYArraysObjetos from './Components/IterandoArraysYArraysObjetos';
// import IterarKeys from './Components/IterarKeys';
// import Padre from './Components/IterandoComponentes/Padre';
// import ComuniacionComponentes1 from './Components/ComunicacionComponentes1';
// import ComunicacionComponentes2 from './Components/ComunicacionComponentes2';
// import Fetch from './Components/Fetch';
// import Axios from './Components/Axios';
// import Padre from './Components/Rutas/Padre';
// import { useCount } from './Components/hooks/useCount';
// import UserProvider from './Components/Context/UserContext'
// import Listausuarios from './Components/ListaUsuarios';

// REDUX
import {Provider} from 'react-redux';
import store from './Redux/store';
import Contador from './Components/Contador'


function App() {

  // const lista=['pera ', 'manzana ', 'uva']

  // const [estado,setEstado]=useState(false)

  // const estadoComponente=()=>{
  //     setEstado(true)
  // }

  // const hijoLlamaPadre=()=>{ 
  //    console.log('llamando a padre desde el componente hijo')
  // }

  // const llamandoAHermano=()=>{
  //     setEstado(true)
  // }

  // Hook Personalizado {/* Ejercicio de useCount */}
  // const[contador]=useCount(0)

  return (
    <>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <hr />
      {/* <PrimerComponente></PrimerComponente> */}
      {/* <Props frutas={lista}></Props> */}
      {/* <State></State> */}
      {/* <EstilosTradicionales></EstilosTradicionales> */}
      {/* <EstilosEnLinea></EstilosEnLinea> */}
      {/* <EstilosEnModulo></EstilosEnModulo> */}
      {/* <EstilosConStyled></EstilosConStyled> */}
      {/* <Refs></Refs> */}
      {/* <CicloVidaComponentes></CicloVidaComponentes> */}
      {/* <Hooks></Hooks> */}
      {/* <Formularios></Formularios> */}
      {/* <Eventos></Eventos> */}
      {/* <RenderizadoCondicional></RenderizadoCondicional> */}
      {/* <SpreadOperator></SpreadOperator> */}
      {/* <IterandoArraysYArraysObjetos></IterandoArraysYArraysObjetos> */}
      {/* <IterarKeys></IterarKeys> */}
      {/* <Padre></Padre> */}
      {/* <ComuniacionComponentes1 llamaHermano2={llamandoAHermano} llamaPadre={hijoLlamaPadre} cambioEstado={estado}></ComuniacionComponentes1>
      <ComunicacionComponentes2 nuevoEstado={estado}></ComunicacionComponentes2>
      <button onClick={estadoComponente}>Pulsa</button>  */}
      {/* <Fetch></Fetch> */}
      {/* <Axios></Axios> */}
      {/* Padre de Componente Rutas */}
      {/* <Padre></Padre> */}
      {/* Ejercicio de useCount */}
      {/* <h1>{contador}</h1> */}

      {/* <UserProvider>
            <Listausuarios></Listausuarios>
      </UserProvider> */}

      {/* REDUX */}
      {/* <Provider store={store}>
        <Contador></Contador>
      </Provider> */}

    </>
  );
}

export default App;
