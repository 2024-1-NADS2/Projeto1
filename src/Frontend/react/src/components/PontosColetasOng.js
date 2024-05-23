import styled from "styled-components";
import React from "react";
import LogoMulheresUnidas from '../assets/logo-assoc-mulheres-pequeno.png';
import LogoExercito from '../assets/logo-exerc-salvacao-pequeno.png';
import LogoEmocentro from '../assets/Hemocentro1.jpg';




const Coletah1 = styled.h1`
@media only screen and (min-width: 1201px){
    text-align: left;
    margin-top: 20px;
    font-weight: bold;
    margin-left: 20px;
    
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        text-align: left;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 20px;   
     } 
    @media (max-width: 1024px) and (min-width: 769px){
        text-align: left;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 20px;
    } 
    @media (max-width: 768px) and (min-width: 481px){
        text-align: left;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 20px;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        text-align: left;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 20px;
    }
   
`
const LogoMulheresUni = styled.img`
@media only screen and (min-width: 1201px){
    padding:10px;
    width: 300px;
    margin-left: 50px;
    
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        padding:10px;
        width: 300px;
        margin-left: 50px;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        padding:10px;
        width: 300px;
        margin-left: 50px;
    } 
    @media (max-width: 768px) and (min-width: 481px){
        padding:10px;
        width: 300px;
        margin-left: 50px;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        padding:10px;
        width: 300px;
        margin-left: 10px;
	}
`
const DivContainer = styled.div`
    padding:20px;
    width: 100%;
    max-width: 1200px;
    margin: 100px auto;
`
const MulheresP = styled.p`
@media only screen and (min-width: 1201px){
    text-align: justify; 
   margin-top: -20px;
   font-weight:bold;
   margin-left: 20px;
   font-family:Arial, Helvetica, sans-serif;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        text-align: justify; 
        margin-top: -20px;
        font-weight:bold;
        margin-left: 20px;
        font-family:Arial, Helvetica, sans-serif;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        text-align: justify; 
        margin-top: -20px;
        font-weight:bold;
        margin-left: 20px;
        font-family:Arial, Helvetica, sans-serif;
    } 
    @media (max-width: 768px) and (min-width: 481px){
        text-align: justify; 
        margin-top: -20px;
        font-weight:bold;
        margin-left: 20px;
        font-family:Arial, Helvetica, sans-serif;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        text-align: justify; 
        margin-top: -20px;
        font-weight:bold;
        margin-left: 20px;
        font-family:Arial, Helvetica, sans-serif;
	}
`
const DoacaoP = styled.p`
@media only screen and (min-width: 1201px){
    text-align:justify;
    column-count:2;
    margin-left: 20px;
    font-family:Arial, Helvetica, sans-serif;
    margin-right: 20px;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        text-align:justify;
        column-count:2;
        margin-left: 20px;
        font-family:Arial, Helvetica, sans-serif;
        margin-right: 20px;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        text-align:justify;
        column-count:1;
        margin-left: 20px;
        font-family:Arial, Helvetica, sans-serif;
        margin-right: 20px;
    } 
    @media (max-width: 768px) and (min-width: 481px){
        text-align:justify;
        column-count:1;
        margin-left: 20px;
        font-family:Arial, Helvetica, sans-serif;
        margin-right: 20px;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        text-align:justify;
        column-count:1;
        margin-left: 20px;
        font-family:Arial, Helvetica, sans-serif;
        margin-right: 20px;
        width: 90%;
	}

`
const MapaContainer = styled.div`
    @media only screen and (min-width: 1201px){
        text-align: right;
        margin-top: -490px;
        margin-bottom: 200px;
        margin-right: 50px;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
        margin-right: 50px;
        margin-top:25px;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
        margin-right: 50px;
        margin-top:20px;
    } 
    @media (max-width: 768px) and (min-width: 481px){
        width: 80%;
        text-align: center;
        margin-bottom: 20px;
        margin-top:20px;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        width: 80%;
        text-align: center;
        margin-bottom: 20px;
        margin-right: 70px;
        margin-top:20px;
	}
`
const StyledIframe = styled.iframe`
  @media only screen and (min-width: 1201px){
     width: 500px;
     height: 300px;
    border: 0;
     margin-top:0;  
     border-radius:5px;  
     margin-right: 20px;
     padding:20px;

      }
    @media (max-width: 1200px) and (min-width: 1025px){
        width: 500px;
        height: 300px;
        border: 0;
        margin-top:0;  
        margin-right: 20px;
        padding:20px;



    } 
    @media (max-width: 1024px) and (min-width: 769px){
        width: 500px;
        height: 300px;
        border: 0;
        margin-top:0;  
        margin-right:20px;
        padding:20px;



        } 
    @media (max-width: 768px) and (min-width: 481px){
        width: 430px;
        height: 300px;
        border: 0;
        margin-top:0;
        align-items: center;
        text-align: center;
        margin-right: 20px;
        padding:20px;


    } 
    @media (max-width: 480px) and (min-width: 320px){
        width: 280px;
        height: 200px;
        border: 0;
        margin-top:0;
        align-items: center;
        text-align: center;
        margin-right: 22px;
        padding:20px;



    } 
 
`;



function LocaisColeta() {

    return (
        <DivContainer>
            <Coletah1>Pontos de Coleta</Coletah1>
            <br></br>
            <hr />
            <LogoMulheresUni src={LogoMulheresUnidas} alt="Logo Mulheres Unidas" />
            <MulheresP>Leve a sua doação a um ponto de arrecadação.</MulheresP>
            <MulheresP>Endereço: Rua Major Diogo, nº 285, Bela Vista, São Paulo - SP</MulheresP>
            <MulheresP>Telefone: (11) 3101-0336</MulheresP>
            <MulheresP>Email: MulheresUnidas@Ong.com.br</MulheresP>
            <DoacaoP>
            A ONG Mulheres Unidas Venceremos se destaca por sua abordagem diversificada na captação de recursos, promovendo ações como bazares e recebendo doações de variados itens. Entre os itens doados, encontram-se materiais para artesanato, roupas, calçados e alimentos não perecíveis. Essas doações são essenciais para o funcionamento da organização e o bem-estar da comunidade assistida.
            <br></br>Acreditando no poder da união, a ONG busca parcerias, colaborações e iniciativas criativas de captação de recursos. Essa busca por apoio é crucial para garantir a continuidade de suas atividades e a realização de seus objetivos: causar um impacto positivo na comunidade e promover o desenvolvimento social.
            </DoacaoP>

            <MapaContainer>
                <StyledIframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.409686123078!2d-46.64561682422835!3d-23.55372517880513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b25edcf751%3A0x65dc308b71d5fd05!2sR.%20Maj.%20Diogo%2C%20285%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001324-001!5e0!3m2!1spt-BR!2sbr!4v1715556526773!5m2!1spt-BR!2sbr"
                    width="500"
                    height="300"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa"
                ></StyledIframe>
            </MapaContainer>
            <hr />
            <br></br>
            <br></br>

            <LogoMulheresUni src={LogoExercito} alt="Logo Exercicito da Salvação" />
            <MulheresP>Endereço: Avenida São Miguel, nº 8400, Vila Norma São Paulo - SP</MulheresP>
            <MulheresP>Telefone: (11) 4003-2299</MulheresP>
            <MulheresP>Email: doacoes@exercitodoacoes.org.br</MulheresP>
            <DoacaoP>
                Contribuir com o bem-estar do próximo é um gesto nobre e transformador. Através da doação, você tem a oportunidade de fazer a diferença na vida de quem mais precisa, seja através de roupas em bom estado, móveis que ainda podem ser utilizados, brinquedos que trarão alegria às crianças, eletrodomésticos que facilitarão o dia a dia, eletrônicos que conectarão pessoas, livros que abrirão novos horizontes, utensílios que auxiliarão nas tarefas domésticas, itens de informática que ampliarão o acesso à informação ou muito mais!
                <br></br>Para facilitar o processo de doação, o Exercito de Salvação conta com Pontos de Coleta e Caixas do Bem, locais seguros e práticos que garantem o destino correto das suas doações. A coleta é realizada por uma equipe uniformizada na data agendada, previamente informada através de contato telefônico, para garantir a sua tranquilidade e evitar imprevistos.
            </DoacaoP>

            <MapaContainer>
                <StyledIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.927748502918!2d-46.457261224229796!3d-23.4991117788427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce616c465eb7db%3A0x44b596bf00cf8716!2sAv.%20S%C3%A3o%20Miguel%2C%208400%20-%20Vila%20Norma%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008070-001!5e0!3m2!1spt-BR!2sbr!4v1715559880550!5m2!1spt-BR!2sbr" width="500" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></StyledIframe>
            </MapaContainer>
            <hr />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <LogoMulheresUni src={LogoEmocentro} alt="Logo Hemocentro" />
            <MulheresP>Endereço:  Av. Doutor Dante Pazzanese, nº 500, Ibirapuera São Paulo - SP</MulheresP>
            <MulheresP>Telefone: (11) 4573-7800</MulheresP>
            <MulheresP>Email: ouvidoria@prosangue.sp.gov.br</MulheresP>
            <DoacaoP>
                O hemocentro desempenha um papel crucial na saúde pública, sendo responsável pela coleta de aproximadamente 40.000 doações de sangue por ano.
                <br></br> Além disso, realiza o registro e exames necessários para identificar doadores compatíveis de medula óssea, contribuindo significativamente para tratamentos que salvam vidas.<br></br> O hemocentro também se encarrega do fracionamento, distribuição e transfusão de hemocomponentes, assegurando que todos os pacientes em sua região de abrangência recebam o suporte necessário.<br></br> Anualmente, isso se traduz em cerca de 65.000 transfusões, fundamentais para o tratamento de diversas condições médicas, desde cirurgias e emergências até terapias para doenças crônicas.
            </DoacaoP>
            
            <MapaContainer>
            <StyledIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.530729037079!2d-46.65393082422748!3d-23.585291778783343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f32b5def55%3A0x2c1883032738d643!2sAv.%20Dr.%20Dante%20Pazzanese%2C%20500%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004012-180!5e0!3m2!1spt-BR!2sbr!4v1715912883752!5m2!1spt-BR!2sbr" width="500" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></StyledIframe>            </MapaContainer>

        </DivContainer>
    )


}
export default LocaisColeta