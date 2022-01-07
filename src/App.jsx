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
import IterarKeys from './Components/IterarKeys';


function App() {

  // const lista=['pera ', 'manzana ', 'uva']
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
      <IterarKeys></IterarKeys>

    </>
  );
}

export default App;
