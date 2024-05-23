import styled from "styled-components";
import React from "react";
import UnidasVenceremos from '../assets/foto_ong_01.jpg'
import LogoUnidasVenceremos from '../assets/logo-assoc-mulheres-pequeno.png';
import DoacaoOng from '../assets/Foto_Ong_associacao.jpg'
import HortaOng from '../assets/Horta.jpg'

const Doacao = styled.img`
    @media only screen and (min-width: 1201px){
        border-radius: 10px;
        width: 500px;
        height: 200px;
        align-items: center;
        text-align: center;
        margin-left: 380px;
        
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        border-radius: 10px;
        text-align: right;
        align-items: right;
        width: 350px;
        height: 200px;
        margin-top: -330px;
        margin-left: 700px; 
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        border-radius: 10px;
        text-align: right;
        align-items: right;
        width: 70%;
        height: 250px;
        margin-left:100px;
        margin-right: 200px;
        display: block;
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
    margin-right: 700px;
    margin-left: px;
    margin-top: 0px;
    width: 100%;
       
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
        width: 90%;
        font-family:Arial, Helvetica, sans-serif;
        column-count: 1;
        padding: 20px;
        text-align: justify;
        margin-right: 400px;
        margin-top: -20px;
        margin-left: 10px   
     } 
    @media (max-width: 768px) and (min-width: 481px){
        width: 90%;
        margin-left:30px;
        margin-top: -10px;
        text-align:justify;
        margin-right: 5px;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        width: 90%;
        margin-left: 30px;
    } 
`
const H3 = styled.h3`
@media only screen and (min-width: 1201px){
    width: 100%;
    text-align: center;
    margin-left: 50px;
    font-weight: bold;
    margin-top: 100px;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        width:100%;
        text-align:left;
        font-weight:bold;
        margin-left: 50px;
        margin-top: 100px;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        width:100%;
        text-align:center;
        font-weight:bold;
        margin-top:50px
    } 
    @media (max-width: 768px) and (min-width: 481px){
        width:100%;
        text-align:center;
        font-weight:bold;  
        margin-top: 50px;
      } 
    @media (max-width: 480px) and (min-width: 320px){
        width:100%;
        text-align:center;
        font-weight:bold; 
        margin-top:50px;
    }
`
const H1 = styled.h1`
      @media only screen and (min-width: 1201px){
        text-align: left;
        font-weight: bold;
        margin:20px 40px 0 40px ;
        margin-top: 35px;
       }
    @media (max-width: 1200px) and (min-width: 1025px){
        width: 100%;
        text-align: left;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 40px;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        width: 100%;
        text-align: left;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 40px;
        } 
    @media (max-width: 768px) and (min-width: 481px){
        text-align: left;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 40px;
        } 
    @media (max-width: 480px) and (min-width: 320px){
        text-align: left;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 40px;
        } 
    `
const AtividadesH3 = styled.h3`
@media only screen and (min-width: 1201px){
    font-weight: bold;
    margin-left: 40px;
    margin-top: 20px;
    text-align: center;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        font-weight: bold;
        margin-left: 40px;
        margin-top: 20px;    } 
    @media (max-width: 1024px) and (min-width: 769px){
        width:100%;
        text-align:center;
        font-weight:bold;
        margin-top:15px;
        } 
    @media (max-width: 768px) and (min-width: 481px){
        width:100%;
        text-align:center;
        font-weight:bold;
        margin-top:15px;  
      } 
    @media (max-width: 480px) and (min-width: 320px){
        width:100%;
        text-align:center;
        font-weight:bold;
        margin-top:15px;	
    }
    
`
const PaiContainer = styled.div`
     padding: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 100px auto;
   
`


function ImagensOng() {
    return (
        <PaiContainer>  
            <H1>
            Associação Mulheres Unidas Venceremos
            </H1>              
                <H3>História da Ong</H3>
                <hr />
                <Pe>
                    A Associação de Mulheres Unidas Venceremos (AMUV) é uma organização não governamental sediada na Rua Major Diogo, número 285, no bairro Bela Vista, em São Paulo.
                    <br></br>Fundada em 1992, a AMUV tem como objetivo principal oferecer apoio e assistência a diversos grupos vulneráveis, com foco especial em mulheres.
                    <br></br>A liderança da associação está a cargo de Romilda, Maria José, Inês e Tati, que são responsáveis pela gestão da ONG e pela organização das redes sociais.
                    <br></br>Embora tenha como público-alvo principal as mulheres, a AMUV está abrindo suas portas para o cadastro de homens também, visando a inclusão e o apoio mútuo.
                    <br></br>Apesar de todas as atividades positivas, a ONG enfrenta desafios como o limite de cadastros devido à falta de recursos financeiros.
                    <br></br>Mesmo assim, a equipe da AMUV se dedica ao máximo para atender ao maior número possível de pessoas.
                </Pe>
                <Doacao src={UnidasVenceremos} alt="Foto Mulheres Unidas Venceremos" />

                <AtividadesH3>Principais Atividades</AtividadesH3>
                <hr />
                <Pe>
                    Uma das principais atividades da ONG é a doação de cestas básicas, roupas e calçados para pessoas em situação de vulnerabilidade, incluindo aquelas que vivem em situação de rua.
                    <br></br>Ademais, a entidade encaminha mulheres vítimas de qualquer tipo de agressão para ONGs parceiras especializadas em violência contra a mulher.
                    <br></br>Em datas comemorativas como Páscoa e Dia das Crianças, a ONG promove ações especiais, como a entrega de ovos de Páscoa e brinquedos para as crianças atendidas.
                    <br></br>A organização também oferece cursos de artesanato, teatro e inglês ministrados por voluntários.
                    <br></br>O prédio utilizado foi cedido pelo sindicato local, demonstrando um importante compromisso da comunidade com a causa.
                </Pe>
            <Doacao src={DoacaoOng} alt="Foto Doações Ong" />
            <AtividadesH3>Horta Dona Denuza</AtividadesH3>
            <hr />
                <Pe>
                    A Horta Dona Denuza é um dos projetos mais inspiradores que merece destaque.
                    <br></br>Esta horta comunitária oferece uma grande variedade de hortaliças, frutas e ervas frescas, além de desempenhar um papel crucial na promoção de hábitos alimentares mais saudáveis na comunidade.
                    <br></br>No entanto, sua importância vai além disso, pois oferece um espaço propício para a realização de palestras educativas sobre plantas, seus benefícios e usos variados. Essa iniciativa vai além de melhorar a qualidade de vida dos participantes, e também contribui para o fortalecimento dos laços comunitários e para a conscientização ambiental.
                </Pe>
            <Doacao src={HortaOng} alt ="Horta Dona Denuza" />

            <AtividadesH3>Captação de Recursos</AtividadesH3>
            <hr />
                <Pe>
                    A associação se destaca como um exemplo inspirador de solidariedade e compromisso com o bem-estar da comunidade. Através de ações simples, porém significativas, a organização demonstra o poder transformador da união e do trabalho em equipe para impactar positivamente a vida das pessoas mais necessitadas.
                    <br></br>Atingindo seus objetivos por meio da realização de bazares e da recepção de doações de materiais para artesanato, roupas, calçados e alimentos não perecíveis, a ONG enfrenta, no entanto, desafios na captação de recursos para a expansão de suas atividades. Entre os planos futuros da organização, está a implementação de aulas de costura, uma iniciativa vista como uma oportunidade valiosa para oferecer novas habilidades à comunidade atendida, promovendo o desenvolvimento pessoal e profissional dos participantes.
                    <br></br>Mesmo diante das dificuldades encontradas, a Associação de Mulheres Unidas Venceremos permanece firme em sua missão, buscando alternativas criativas e sustentáveis para garantir o sucesso de seus projetos e a continuidade de seu impacto positivo na comunidade. A organização demonstra resiliência e compromisso inabalável com a transformação social, inspirando admiração e servindo como um farol de esperança para aqueles que mais precisam.
                </Pe>
            <Doacao src={LogoUnidasVenceremos} alt = "Logo Mulheres Unidas" />


        </PaiContainer>
    )
}
export default ImagensOng


