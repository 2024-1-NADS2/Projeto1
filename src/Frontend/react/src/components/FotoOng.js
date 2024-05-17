import styled from "styled-components";
import { Link } from 'react-router-dom';
import React from "react";
import UnidasVenceremos from '../assets/foto_ong_01.jpg'
import LogoUnidasVenceremos from '../assets/logo-assoc-mulheres-pequeno.png';
import DoacaoOng from '../assets/Foto_Ong_associacao.jpg'
import HortaOng from '../assets/Horta.jpg'

const Doacao = styled.img`
 @media only screen and (min-width: 1201px){
        border-radius: 10px;
        width: 400px;
        height: 200px;
        align-items: right;
        text-align: center;
        margin-left: 750px;
        margin-top: -300px;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        border-radius: 10px;
        text-align: right;
        align-items: right;
        width: 350px;
        height: 200px;
        margin-top: -330px;
        margin-left: 750px; 
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        border-radius: 10px;
        text-align: right;
        align-items: right;
        width: 350px;
        height: 200px;
        margin-top: -450px;
        margin-left: 650px;    
     } 
    @media (max-width: 768px) and (min-width: 481px){
        width: 450px;
        border-radius: 10px;
        height: 250px;
        margin-left: 35px;
        margin: 20px auto;
        display:block;


    } 
    @media (max-width: 480px) and (min-width: 320px){
        width: 80%;
        border-radius: 10px;
        margin-left:20px;
    } 
  

`
const Logo = styled.img`
    @media only screen and (min-width: 1201px){
     align-items: right;
    text-align: center;
    margin-left: 880px;
    margin-top: -420px;
    width: 300px;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
    } 
    @media (max-width: 1024px) and (min-width: 769px){
    } 
    @media (max-width: 768px) and (min-width: 481px){
    } 
    @media (max-width: 480px) and (min-width: 320px){

    }
    align-items: right;
    text-align: center;
    margin-left: 880px;
    margin-top: -420px;
    width: 300px;
`


const ImgOng = styled.img`
 @media only screen and (min-width: 1201px){
    border-radius: 10px;
    width: 400px;
    height: 200px;
    align-items: right;
    text-align: center;
    margin-left: 750px;
    margin-top: -400px;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        border-radius: 10px;
        width: 350px;
        height: 200px;
        align-items: right;
        text-align: center;
        margin-left: 750px;
        margin-top: -450px;    
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        border-radius: 10px;
        width: 350px;
        height: 200px;
        align-items: right;
        text-align: center;
        margin-left: 650px;
        margin-top: -500px;    
     } 
    @media (max-width: 768px) and (min-width: 481px){
        width: 450px;
        border-radius: 10px;
        height: 250px;
        margin-left: 35px;
        margin: 20px auto;
        display:block;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        width: 80%;
        border-radius: 10px;
        margin-left:20px;
    } 
    
`
const Pe = styled.p`
@media only screen and (min-width: 1201px){
    font-family:Arial, Helvetica, sans-serif;
    column-count: 2;
    padding: 20px;
    text-align: justify;
    margin-right: 500px;
    margin-left: 20px;
    margin-top: 0px;
       
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        font-family:Arial, Helvetica, sans-serif;
        column-count: 2;
        margin:30px;
        padding: 10px;
        text-align: justify;
        margin-right: 500px;
        margin-top: -20px;
        margin-left: 20px
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        font-family:Arial, Helvetica, sans-serif;
        column-count: 1;
        padding: 20px;
        text-align: justify;
        margin-right: 400px;
        margin-top: -20px;
        margin-left: 10px   
     } 
    @media (max-width: 768px) and (min-width: 481px){
        width: 100%;
        margin-left:20px;
        margin-top: -10px;
        text-align:justify;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        width: 100%;
        margin-left: 20px;
    } 
   

`
const H3 = styled.h3`
    text-align: left;
    margin-left: 50px;
    font-weight: bold;
    margin-top: 200px;
`
const AtividadesH3 = styled.h3`
    font-weight: bold;
    margin-left: 40px;
    margin-top: 20px;
`
const PaiContainer = styled.div`
max-width: 1200px;
margin:0 auto;

`


function ImagensOng() {
    return (
        <PaiContainer>                
                <H3>História da Ong</H3>
                <hr />
                <Pe>
                     A Associação de Mulheres Unidas Venceremos (AMUV) é uma organização não governamental com sede na Rua Major Diogo, número 285, no bairro Bela Vista, São Paulo.<br></br> Fundada em 1992, a AMUV tem como objetivo principal oferecer apoio e assistência a diversos grupos vulneráveis, com foco especial nas mulheres.<br></br>A frente da associação é liderada por Romilda, Maria José, Inês e Tati, que são responsáveis da ONG e pela organização das redes sociais.<br></br> Embora seja frequentada principalmente por mulheres, a AMUV está abrindo suas portas para cadastrar homens também, visando a inclusão e o apoio mútuo.<br></br>Apesar de todas as atividades positivas, a ONG enfrenta desafios como o limite de cadastros devido à falta de recursos suficientes.<br></br> No entanto, eles fazem o possível para atender ao maior número possível de pessoas.

                </Pe>
                <ImgOng src={UnidasVenceremos} alt="Foto Mulheres Unidas Venceremos" />

                <AtividadesH3>Principais Atividades</AtividadesH3>
                <hr />
                <Pe>Uma das principais atividades da ONG é fornecer cestas básicas, roupas e calçados para pessoas em situação de vulnerabilidade, incluindo aqueles que vivem nas ruas.<br></br>Além disso, a associação encaminha mulheres que sofrem qualquer tipo de agressão para ONGs parceiras especializadas em violência de gênero.<br></br>Durante datas comemorativas, como a Páscoa e o Dia das Crianças, a ONG realiza ações especiais, como a entrega de ovos de Páscoa e brinquedos para as crianças atendidas pela associação.<br></br>A organização também oferece aulas de artesanato, teatro e inglês ministradas por voluntários.<br></br> O prédio utilizado foi cedido pelo sindicato local, demonstrando uma colaboração importante da comunidade.
</Pe>
            <Doacao src={DoacaoOng} alt="Foto Doações Ong" />
            <AtividadesH3>Horta Dona Denuza</AtividadesH3>
            <hr />
            <Pe>A Horta Dona Denuza é um dos projetos mais cativantes que merecem ser destacados.<br></br> Esta horta comunitária não só proporciona uma diversidade incrível de ervas, frutas e temperos frescos, mas também desempenha um papel fundamental ao fomentar hábitos alimentares mais saudáveis na comunidade.<br></br> No entanto, sua importância vai além disso, pois serve como um ambiente propício para a realização de palestras educativas sobre plantas, seus benefícios e diversas formas de utilização.<br></br> Essa iniciativa não apenas enriquece a qualidade de vida dos participantes, mas também fortalece os laços comunitários e promove a conscientização ambiental e sustentável.</Pe>
            <Doacao src={HortaOng} alt ="Horta Dona Denuza" />

            <AtividadesH3>Captação de Recursos</AtividadesH3>
            <hr />
            <Pe>A Associação de Mulheres Unidas Venceremos é um exemplo inspirador de solidariedade e compromisso comunitário, mostrando como pequenas ações podem ter um grande impacto na vida das pessoas mais necessitadas.<br></br>A ONG busca captar recursos por meio de bazares e doações de materiais para artesanato, roupas, calçados e alimentos não perecíveis.<br></br>No entanto, enfrenta desafios na captação de recursos para expandir suas atividades, incluindo a implementação de aulas de costura no futuro.<br></br> Essa expansão é vista como uma oportunidade valiosa para oferecer novas habilidades à comunidade atendida pela ONG, contribuindo para o desenvolvimento pessoal e profissional dos participantes.<br></br> Apesar das dificuldades enfrentadas, a organização está comprometida em buscar alternativas criativas e sustentáveis para garantir o sucesso de seus projetos e a continuidade de seu impacto positivo na comunidade.</Pe>
            <Logo src={LogoUnidasVenceremos} alt = "Logo Mulheres Unidas" />

        </PaiContainer>



    )


}
export default ImagensOng


