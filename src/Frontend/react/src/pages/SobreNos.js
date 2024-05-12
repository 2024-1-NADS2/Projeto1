import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SobreTodos from '../components/SobreTodos';

 /* @media (max-width: 1201px) {
    
    width:100px;
    flex-direction: column;
    background-color:red;
   

  } */
    


function SobreNos(){
    return(
        <div>
            <Header/>

            <SobreTodos />

            <Footer/>
        </div>
    );
}

export default SobreNos;