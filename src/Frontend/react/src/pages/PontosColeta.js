import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocaisColeta from '../components/PontosColetasOng';
import styled from 'styled-components';



const Coletas = styled.div`
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


function PontosColeta(){
    return(
        <Coletas>
            <Header/>
            <LocaisColeta />
            
            <Footer/>
        </Coletas>
    );
}

export default PontosColeta;