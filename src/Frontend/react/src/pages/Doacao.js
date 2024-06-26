import React from 'react';
import FormularioDoacao from '../components/FormularioDoacao';
import styled from 'styled-components';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const DoacaoContainer = styled.div`
    @media only screen and (min-width: 1201px){  
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        background-color: #198754;
        height: 100vh;
    }
    @media (max-width: 1200px) and (min-width: 1025px){  
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        background-color: #198754;
        height: 100vh;
    }
    @media (max-width: 1024px) and (min-width: 769px){  
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        background-color: #198754;
        height: 100vh;
    }
    @media (max-width: 768px) and (min-width: 481px){  
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        background-color: #198754;
        height: 100vh;
    }
    @media (max-width: 480px) and (min-width: 320px){  
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        background-color: #198754;
        height: 100vh;
    }
`

const FormularioDoacaoContainer = styled.div`
    @media only screen and (min-width: 1201px) {
        background-color: #ffff;
        display: flex;
        align-content: center;
        justify-content: center;
        border-radius: 10px;
        width: 1000px;
        height: 600px;
    }
    @media (max-width: 1200px) and (min-width: 1025px) {
        background-color: #ffff;
        display: flex;
        align-content: center;
        justify-content: center;
        border-radius: 10px;
        width: 900px;
        height: 600px;
    }
    @media (max-width: 1024px) and (min-width: 769px) {
        background-color: #ffff;
        display: flex;
        align-content: center;
        justify-content: center;
        border-radius: 10px;
        width: 700px;
        height: 600px;
    }
    @media (max-width: 768px) and (min-width: 481px) {
        background-color: #ffff;
        display: flex;
        align-content: center;
        justify-content: center;
        border-radius: 10px;
        width: 450px;
        height: 600px;
    }
    @media (max-width: 480px) and (min-width: 320px) {
        background-color: #ffff;
        display: flex;
        align-content: center;
        justify-content: center;
        border-radius: 10px;
        width: 300px;
        height: 600px;
    }
`

const FotoContainer = styled.div`
    @media only screen and (min-width: 1201px) {
        flex: 1;
        align-content: center;
        justify-content: center;
        max-width: 400px;
        img{
            align-content: center;
            justify-content: center;
        }
    }
    @media (max-width: 1200px) and (min-width: 1025px) {
        flex: 1;
        align-content: center;
        justify-content: center;
        max-width: 400px;
        img{
            align-content: center;
            justify-content: center;
        }
    }
    @media (max-width: 1024px) and (min-width: 769px) {
        flex: 1;
        align-content: center;
        justify-content: center;
        max-width: 330px;
        img{
            align-content: center;
            justify-content: center;
        }
    }
    @media (max-width: 768px) and (min-width: 481px) {
        flex: 1;
        align-content: center;
        justify-content: center;
        max-width: 200px;
        img{
            align-content: center;
            justify-content: center;
            width: 230px;
        }
    }
    @media (max-width: 480px) and (min-width: 320px) {
        img{
            width: 0px;
        }
    }
`

function Doacao(){
    return(
        <DoacaoContainer>
            <FormularioDoacaoContainer>
                <FotoContainer>
                    <Link to={"/"}>
                        <img src={Logo} alt="Logo DoaMais" />
                    </Link>
                </FotoContainer>
                <FormularioDoacao/>
            </FormularioDoacaoContainer>
        </DoacaoContainer>
    );
}

export default Doacao;