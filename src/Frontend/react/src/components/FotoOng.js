import styled from "styled-components";
import { Link } from 'react-router-dom';
import React from "react";
import UnidasVenceremos from '../assets/foto_ong_01.jpg'
import LogoUnidasVenceremos from '../assets/logo-assoc-mulheres-pequeno.png';


const ImgOng = styled.div`
    border-radius: 50px;
    width: 100%px;
    align-items: right;
    text-align: center;
    margin-top: 20px

`
const Pe = styled.div`
    font-family:Arial, Helvetica, sans-serif;
    column-count: 4;
    margin-top: 20px;
    padding: 100px;
    text-align: justify;

`
const ImgLogo = styled.div`
    text-align: center;
`



function ImagensOng() {
    return (
        <div>
            <ImgOng>
                <img src={UnidasVenceremos} alt="Foto Mulheres Unidas Venceremos" />
                <p>Festa de Natal de 2023</p>
                <h3>Historia da Ong</h3>
                <ImgLogo>
                    <img src={LogoUnidasVenceremos} alt="Logo Mulheres Unidas Venceremos" />
                    <hr />
                </ImgLogo>

              
                
                <Pe>
                    <p>
                        A Associação de Mulheres Unidas Venceremos (AMUV) é uma organização não governamental com sede na Rua Major Diogo, número 285, no bairro Bela Vista, São Paulo. Fundada em 1992, a AMUV tem como objetivo principal oferecer apoio e assistência a diversos grupos vulneráveis, com foco especial nas mulheres.<br></br>A frente da associação é liderada por Romilda, Maria José, Inês e Tati, que são responsáveis da ONG e pela organização das redes sociais. Embora seja frequentada principalmente por mulheres, a AMUV está abrindo suas portas para cadastrar homens também, visando a inclusão e o apoio mútuo.<br></br>Uma das principais atividades da ONG é fornecer cestas básicas, roupas e calçados para pessoas em situação de vulnerabilidade, incluindo aqueles que vivem nas ruas. Além disso, a associação encaminha mulheres que sofrem qualquer tipo de agressão para ONGs parceiras especializadas em violência de gênero.<br></br>A organização também oferece aulas de artesanato, teatro e inglês ministradas por voluntários. O prédio utilizado foi cedido pelo sindicato local, demonstrando uma colaboração importante da comunidade.<br></br>Para captar recursos, a ONG realiza bazares e recebe doações de materiais para artesanato, roupas, calçados e alimentos não perecíveis. Há o desejo de expandir as atividades com aulas de costura no futuro, mas a organização enfrenta dificuldades na captação de recursos.<br></br>Durante datas comemorativas, como a Páscoa e o Dia das Crianças, a ONG realiza ações especiais, como a entrega de ovos de Páscoa e brinquedos para as crianças atendidas pela associação.<br></br>Um dos projetos mais interessantes é a Horta Dona Denuza, uma horta comunitária que oferece uma variedade de ervas, frutas e temperos. Além de promover a alimentação saudável, a horta também é um espaço para palestras educativas sobre plantas e seu uso.<br></br>Apesar de todas as atividades positivas, a ONG enfrenta desafios como o limite de cadastros devido à falta de recursos suficientes. No entanto, eles fazem o possível para atender ao maior número possível de pessoas.<br></br>A Associação de Mulheres Unidas Venceremos é um exemplo inspirador de solidariedade e compromisso comunitário, mostrando como pequenas ações podem ter um grande impacto na vida das pessoas mais necessitadas.

                    </p>
                </Pe>
            </ImgOng>


        </div>



    )


}
export default ImagensOng