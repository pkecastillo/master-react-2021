import React,{createRef} from 'react';

const Refs = () => {

    const cambioColor=createRef()

    const cambioColorTexto=()=>{
        if(cambioColor.current.style.color!=='blue')
        cambioColor.current.style.color='blue'
        else
        cambioColor.current.style.color='red'
    }

    return (
        <>
            <h1 ref={cambioColor}>Soy Titulo y que?</h1>
            <button onClick={cambioColorTexto}>Cambiar Color</button>
        </>
    );
}

export default Refs;