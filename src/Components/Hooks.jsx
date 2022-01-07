import React,{useState,useEffect} from 'react';

const Hooks = () => {

    const[color,setColor]=useState('yellow')
    const[contador,setContador]=useState(0)

    useEffect(() => {
        let intervalo=setInterval(()=>{setContador(contador+1)},1000)
        return () => {
            clearInterval(intervalo)
        };
    }, [contador]);

    const fondo={
        width:'100%',
        height:'500px',
        backgroundColor:color
    }

    const cambioColor=()=>{
        if(color==='yellow')
        setColor('orangered')
        else
        setColor('yellow')
    }

    return (
        <>
            <div style={fondo} className="container">
                <button onClick={cambioColor}>Cambiar Color</button>
                <h1>Contador: {contador}</h1>
            </div>
        </>
    );
}

export default Hooks;
