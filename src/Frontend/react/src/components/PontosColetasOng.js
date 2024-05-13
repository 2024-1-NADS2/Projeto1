import styled from "styled-components";
import React from "react";
import LogoMulheresUnidas from '../assets/logo-assoc-mulheres-pequeno.png';
import LogoExercito from '../assets/logo-exerc-salvacao-pequeno.png';
import LogoAacd from '../assets/logo-aacd-pequeno.png';
import { Route } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const Coletah1 = styled.h1`
    text-align: left;
    margin-top: 20px;
    font-weight: bold;
    margin-left: 20px;
`
const LogoMulheresUni = styled.img`
    padding:10px;
    width: 300px;
    margin-left: 50px;

`
const DivContainer = styled.div`
    padding:20px;
`
const MulheresP = styled.p`
   text-align: justify; 
   margin-top: -20px;
   font-weight:bold;
   margin-left: 20px;
   font-family:Arial, Helvetica, sans-serif;



`
const DoacaoP =styled.p`
    text-align:justify;
    column-count:2;
    margin-left: 20px;
    font-family:Arial, Helvetica, sans-serif;
    margin-right: 20px;

`
const MapaContainer = styled.div`
    text-align: right;
    margin-top: -470px;
    margin-bottom: 200px;
    margin-right: 60px;


`
const ExercitoContainer = styled.div`
    text-align: right;
    margin-top: -420px;
    margin-bottom: 200px;
    margin-right: 60px;
`
const AACDContainer = styled.div`
    text-align: right;
    margin-top: -470px;
    margin-bottom: 200px;
    margin-right: 60px;
`


function LocaisColeta(){

    return(
            <DivContainer>
            <Coletah1>Pontos de Coleta</Coletah1>
            <hr />
            <LogoMulheresUni src={LogoMulheresUnidas} alt="Logo Mulheres Unidas" />
            <MulheresP>Leve a sua doação a um ponto de arrecadação.</MulheresP>
            <MulheresP>Endereço: Rua Major Diogo, nº 285, Bela Vista, São Paulo - SP</MulheresP>
            <MulheresP>Telefone: (11) 3101-0336</MulheresP>
            <MulheresP>Email: MulheresUnidas@Ong.com.br</MulheresP>
            <DoacaoP>A ONG Mulheres Unidas Venceremos tem uma abordagem diversificada para captar recursos, incluindo a realização de bazares e a recepção de doações de diversos tipos de itens.Entre as doações recebidas estão materiais para artesanato, roupas, calçados e alimentos não perecíveis. Esses itens são fundamentais para apoiar as atividades da organização e beneficiar a comunidade atendida.a ONG está aberta a parcerias, colaborações e iniciativas criativas de captação de recursos. Essa busca por apoio é fundamental para garantir o sucesso contínuo das atividades da organização e a realização de seus objetivos de impactar positivamente a comunidade e promover o desenvolvimento social.</DoacaoP>
            <MapaContainer>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.409686123078!2d-46.64561682422835!3d-23.55372517880513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b25edcf751%3A0x65dc308b71d5fd05!2sR.%20Maj.%20Diogo%2C%20285%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001324-001!5e0!3m2!1spt-BR!2sbr!4v1715556526773!5m2!1spt-BR!2sbr"
                width="600"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa"
            ></iframe>           
             </MapaContainer>   
             <hr />
             <LogoMulheresUni src={LogoExercito} alt="Logo Exercicito da Salvação" />
             <MulheresP>Endereço: Avenida São Miguel, nº 8400, Vila Norma São Paulo - SP</MulheresP>
             <MulheresP>Telefone: (11) 4003-2299</MulheresP>
             <MulheresP>Email: doacoes@exercitodoacoes.org.br</MulheresP>
             <DoacaoP>Levar sua doação para um ponto de coleta ou uma Caixa do Bem, que são locais seguros e práticos para depositar sua doação.<br></br>O que eu posso doar?
Roupas, Móveis em bom estado, Brinquedos, Eletrodomésticos, Eletrônicos, Livros, Utensílios, Itens de Informática e muito mais.
A coleta é feita por uma equipe uniformizada na data agendada. Entramos em contato para informar sobre a proximidade e imprevistos.</DoacaoP>

             <ExercitoContainer>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.927748502918!2d-46.457261224229796!3d-23.4991117788427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce616c465eb7db%3A0x44b596bf00cf8716!2sAv.%20S%C3%A3o%20Miguel%2C%208400%20-%20Vila%20Norma%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008070-001!5e0!3m2!1spt-BR!2sbr!4v1715559880550!5m2!1spt-BR!2sbr" width="600" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             </ExercitoContainer>
             <hr />
             <LogoMulheresUni src={LogoAacd} alt="Logo AACD" />
             <MulheresP>Endereço: Av. Professor Ascendino Reis, nº 724, Ibirapuera – São Paulo – SP</MulheresP>
            <MulheresP>Telefone: (11) 5576-0777</MulheresP>
            <MulheresP>Email: doeaacd@aacd.org.br</MulheresP>
            <MulheresP>Agência: 3381-2 Conta: 11.100-7</MulheresP>
            <DoacaoP>A AACD é uma organização sem fins lucrativos focada em garantir assistência médico-terapêutica de excelência em Ortopedia e Reabilitação. A Instituição atende pessoas de todas as idades, recebendo pacientes via Sistema Único de Saúde (SUS), planos de saúde e particular.Você pode fazer doações mensais à AACD por meio de cartão de crédito, cartão de débito, depósito em conta ou boleto bancário. Contribua com o valor que desejar e ajude a AACD a garantir atendimento de excelência a milhares de pacientes!</DoacaoP>
            <AACDContainer>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.202397077593!2d-46.6539785242272!3d-23.597073178775286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2207483d79%3A0x4f768cad344fa95c!2sAv.%20Professor%20Ascendino%20Reis%2C%20724%20-%20Ibirapuera%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004027-000!5e0!3m2!1spt-BR!2sbr!4v1715562004291!5m2!1spt-BR!2sbr" width="600" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </AACDContainer>
            
            </DivContainer>




    )


}
export default LocaisColeta