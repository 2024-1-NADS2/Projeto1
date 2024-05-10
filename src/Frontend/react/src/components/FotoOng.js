import styled from "styled-components";
import {Link} from 'react-router-dom';
import React from "react";
import UnidasVenceremos from '../assets/foto_ong_01.jpg'
import LogoUnidasVenceremos from '../assets/logo-assoc-mulheres-pequeno.png';
import DoacaoOng from '../assets/Foto_Ong_associacao.jpg'

const Doacao = styled.img`
border-radius: 10px;
    width: 400px;
    height: 200px;
    align-items: right;
    text-align: center;
    margin-left: 900px;
    margin-top: -320px;
`

const ImgOng = styled.img`
    border-radius: 10px;
    width: 400px;
    height: 200px;
    align-items: right;
    text-align: center;
    margin-left: 900px;
    margin-top: 80px;
`
const Pe = styled.p`
    font-family:Arial, Helvetica, sans-serif;
    column-count: 2;
    margin:30 30 30 30;
    padding: 20px;
    text-align: justify;
    margin-top:10px;
    margin-right: 500px;

`
const ImgLogo = styled.div`
    text-align: center;
`
const H3 = styled.h3`
    text-align: left;
    margin-top: -260px;
    margin-left: 50px;
    font-weight: bold;
`
const AtividadesH3 = styled.h3`
    font-weight: bold;
    margin-left: 40px;
    margin-top: 20px;
`
const FestaP =styled.p`
    text-align: center;
    margin-left: 800px;
    margin-top: -60px;

`
const DoacaoP =styled.p`
    text-align: center;
    margin-left: 800px;
    margin-top: -70px;
`



function ImagensOng(){
    return(
        <div> 
            <ImgOng src={UnidasVenceremos} alt = "Foto Mulheres Unidas Venceremos" />
                <H3>Historia da Ong</H3>
            
            <Pe>
                <p>A Associação de Mulheres Unidas Venceremos (AMUV) é uma organização não governamental com sede na Rua Major Diogo, número 285, no bairro Bela Vista, São Paulo. Fundada em 1992, a AMUV tem como objetivo principal oferecer apoio e assistência a diversos grupos vulneráveis, com foco especial nas mulheres.<br></br>A frente da associação é liderada por Romilda, Maria José, Inês e Tati, que são responsáveis da ONG e pela organização das redes sociais. Embora seja frequentada principalmente por mulheres, a AMUV está abrindo suas portas para cadastrar homens também, visando a inclusão e o apoio mútuo.<br></br>Uma das principais atividades da ONG é fornecer cestas básicas, roupas e calçados para pessoas em situação de vulnerabilidade, incluindo aqueles que vivem nas ruas. Além disso, a associação encaminha mulheres que sofrem qualquer tipo de agressão para ONGs parceiras especializadas em violência de gênero.
</p>

            </Pe> 


            <AtividadesH3>Principais Atividades</AtividadesH3>
            <Pe>Uma das principais atividades da ONG é fornecer cestas básicas, roupas e calçados para pessoas em situação de vulnerabilidade, incluindo aqueles que vivem nas ruas.<br></br> Além disso, a associação encaminha mulheres que sofrem qualquer tipo de agressão para ONGs parceiras especializadas em violência de gênero.<br></br>Durante datas comemorativas, como a Páscoa e o Dia das Crianças e Natal, a ONG realiza ações especiais, como a entrega de ovos de Páscoa e brinquedos para as crianças atendidas pela associação.<br></br>A organização também oferece aulas de artesanato, teatro e inglês ministradas por voluntários.<br></br> O prédio utilizado foi cedido pelo sindicato local, demonstrando uma colaboração importante da comunidade.
</Pe>
            <Doacao src={DoacaoOng} alt = "Logo"/>



                
            </div>



    )


}
export default ImagensOng