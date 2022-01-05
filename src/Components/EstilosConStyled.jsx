import React,{Component} from "react";
import styled,{keyframes} from "styled-components";
import './EstilosConStyled_variables.css'

class EstilosConStyled extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 

        const fondoTexto={
            color:'green'
        }

        const Titulo=styled.h1`
            color:yellow;
            font-size:29px;
            text-align:center;
            background-color:${fondoTexto.color};

            &:hover{
                color:grey;
            }

            // Media Querys
            @media(max-width:480px){
                color:transparent;
            }

            
        `
        const Cabecera=styled.header`
            height:var(--altoHeader);
            background-color:var(--colorHeader);
            width:var(--anchoHeader);
        `

        const animaTexto=keyframes`
            from{
                color:green;
            }
            to{
                color:red;
            }
        `

        return ( 
            <>
                <Cabecera>
                    <Titulo>
                        Estamos en Styled Component
                    </Titulo>
                </Cabecera>
            </>
         );
    }
}
 
export default EstilosConStyled;