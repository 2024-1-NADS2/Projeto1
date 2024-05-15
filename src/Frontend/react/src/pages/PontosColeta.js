import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocaisColeta from '../components/PontosColetasOng';

function PontosColeta(){
    return(
        <div>
            <Header/>
            <LocaisColeta />
            
            <Footer/>
        </div>
    );
}

export default PontosColeta;