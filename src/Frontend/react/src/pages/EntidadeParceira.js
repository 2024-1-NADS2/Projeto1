import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import FotoOng from '../components/FotoOng';


const EntidadesContainer = styled.div`
    @media only screen and (min-width: 1201px){
        width: 100%;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        width: 100%;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        width: 100%;
    } 
    @media (max-width: 768px) and (min-width: 481px){
        width: 100%;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        width: 100%;
    } 
    `
    const H1 = styled.h1`
    text-align: left;
    margin-top: 20px;
    font-weight: bold;
    margin-left: 20px;

    `
    
    

function EntidadeParceira(){
    return(
        <div>
            <EntidadesContainer>
            <Header/>
            <H1>
            Associação Mulheres Unidas Venceremos
            </H1>
            <FotoOng />

            <Footer/>
            </EntidadesContainer>

        </div>
        
    );
}

export default EntidadeParceira;