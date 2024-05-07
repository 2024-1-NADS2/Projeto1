import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import FAQ from './pages/FAQ';
import PontosColeta from './pages/PontosColeta';
import EntidadeParceira from './pages/EntidadeParceira';
import ComoFunciona from './pages/ComoFunciona';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Doacao from './pages/Doacao';
import GlobalStyles from './styles/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import VLibras from 'vlibras-nextjs';


function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/sobrenos" element = {<SobreNos />}/>
        <Route path="/pontoscoleta" element = {<PontosColeta />}/>
        <Route path="/FAQ" element = {<FAQ />}/>
        <Route path="/comofunciona" element = {<ComoFunciona />}/>
        <Route path="/entidadeparceira" element = {<EntidadeParceira />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/cadastro" element = {<Cadastro />}/>
        <Route path="/doacao" element = {<Doacao />}/>
      </Routes>
      <VLibras forceOnload />
    </Router>   
  );
}

export default App;
