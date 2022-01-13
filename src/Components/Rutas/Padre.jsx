import React from 'react'
import Componente1 from './Componente1'
import Componente2 from './Componente2'
import Componente3 from './Componente3'
import RutasDinamicas from './RutasDinamicas'
import {BrowserRouter,Route,Link,NavLink,Navigate, Routes} from 'react-router-dom';
import './Padre.css'

const Padre = () => {
    return (

        <BrowserRouter>
        <h5>
            <NavLink style={isActive => ({
                color: isActive ? "green" : "blue"
                })} to="/">
                Inicio 
            </NavLink>
        </h5>
        <h5>
            <NavLink style={isActive => ({
                color: isActive ? "green" : "blue"
                })}  to="/pagina1">
                A componente1 
            </NavLink>
        </h5>
        <h5>
            <NavLink style={isActive => ({
                color: isActive ? "green" : "blue"
                })}  to="/pagina2">
                A componente2 
            </NavLink>
        </h5>
        <h5>
            <Link to="/pagina3">
                A componente3 
            </Link>
            <br/><br/>
        </h5>
        

            <Routes>
                {/* debemos poner exact para que vaya directo a la ruta ppal */}
                <Route path="/" element={<Componente1 />}></Route>,
                <Route path="/pagina1" element={<Componente1 />}></Route>,
                {/* la palabra sensitive no permite la ruta en mayuscula */}
                <Route path="/pagina2" sensitive element={<Componente2 />}></Route>,
                <Route path="/pagina3" element={<Componente3 />}></Route>,
                {/* <Route path="/pagina4" component={()=><h2>hola estamos en componente4</h2>}></Route> */}
                <Route path="/users/:id" component={RutasDinamicas}></Route> 

                {/* <Route path='/*'>
                    <Navigate to="/"/>
                </Route> */}
                

            </Routes>
            
        </BrowserRouter>


    )
}

export default Padre