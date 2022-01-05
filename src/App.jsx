import logo from './logo.svg';
import './App.css';
// import PrimerComponente from './Components/PrimerComponente';
// import Props from './Components/Props';
// import State from './Components/State';
import EstilosTradicionales from './Components/EstilosTradicionales';


function App() {

  const lista=['pera ', 'manzana ', 'uva']
  return (
    <>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <hr />
      {/* <PrimerComponente></PrimerComponente> */}
      {/* <Props frutas={lista}></Props> */}
      {/* <State></State> */}
      <EstilosTradicionales></EstilosTradicionales>
    </>
  );
}

export default App;
