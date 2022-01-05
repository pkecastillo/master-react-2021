import logo from './logo.svg';
import './App.css';
// import PrimerComponente from './Components/PrimerComponente';
// import Props from './Components/Props';
// import State from './Components/State';
// import EstilosTradicionales from './Components/EstilosTradicionales';
// import EstilosEnLinea from './Components/EstilosEnLinea';
// import EstilosEnModulo from './Components/EstilosEnModulo';
import EstilosConStyled from './Components/EstilosConStyled';


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
      <EstilosConStyled></EstilosConStyled>
    </>
  );
}

export default App;
