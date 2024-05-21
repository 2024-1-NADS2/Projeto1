import styled from "styled-components"; 
import React from "react";


const FaqContainer = styled.div`
    padding: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 100px auto;

`


const FaqH1 = styled.h1`
  @media only screen and (min-width: 1201px){
    align-items: center;
    font-weight: bold;
    text-align:center;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        align-items: center;
        font-weight: bold;
        text-align:center;    } 
    @media (max-width: 1024px) and (min-width: 769px){
        align-items: center;
        font-weight: bold;
        text-align:center;
    } 
    @media (max-width: 768px) and (min-width: 481px){
        align-items: center;
        font-weight: bold;
        text-align:center;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        width: 100%;align-items: center;
        font-weight: bold;
        text-align:center;
    } 
    
`
const Sumary = styled.summary`
  @media only screen and (min-width: 1201px){
    font-weight: bold;
    padding: 20px;    
}
    @media (max-width: 1200px) and (min-width: 1025px){
        font-weight: bold;
        padding: 20px;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        font-weight: bold;
        padding: 20px;  
      } 
    @media (max-width: 768px) and (min-width: 481px){
        font-weight: bold;
        padding: 20px;   
     } 
    @media (max-width: 480px) and (min-width: 320px){
        font-weight: bold;
        padding: 20px;
} 
`
const FaqH4 = styled.h4`
  @media only screen and (min-width: 1201px){
        text-align: left;
        font-weight: bold;
        padding: 20px;
        margin-top: 20px;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        text-align: left;
        font-weight: bold;
        padding: 20px;
        margin-top: 20px;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        text-align: left;
        font-weight: bold;
        padding: 20px;
        margin-top: 20px;
    } 
    @media (max-width: 768px) and (min-width: 481px){
        text-align: left;
        font-weight: bold;
        padding: 20px;
        -top: 20px;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        text-align: left;
        font-weight: bold;
        padding: 20px;
        margin-top: 20px;
    } 
  
`
const Details = styled.details`
  @media only screen and (min-width: 1201px){
        padding:10PX;
        text-align: justify;width: 100%;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        padding:10PX;
        text-align: justify;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        padding:10PX;
        text-align: justify;
    } 
    @media (max-width: 768px) and (min-width: 481px){
        padding:10PX;
        text-align: justify;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        padding:10PX;
        text-align: justify;
    } 
    
`
const P = styled.p`
  @media only screen and (min-width: 1201px){
        padding: 20px;
        text-align: justify;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        padding: 20px;
        text-align: justify;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        padding: 20px;
        text-align: justify;
    } 
    @media (max-width: 768px) and (min-width: 481px){
        padding: 20px;
        text-align: justify;
    } 
    @media (max-width: 480px) and (min-width: 320px){
        padding: 20px;
        text-align: justify;
    } 
`



function Faq(){

    return (

        <FaqContainer>  

            <FaqH1> Dúvidas </FaqH1>

            <FaqH4>Dúvidas Frequentes</FaqH4>

            <Details>
             <Sumary>Como posso doar para uma Ong parceira?</Sumary>   
               <P>Para se inscrever como doador, faça seu cadastro em poucos passos no nosso site.<br></br>Tendo o cadastro concluido, para fazer sua doação atraves do seu cupom fiscal, basta clicar no botao (DOE AGORA).<br></br>Faça seu login no site, após estar logado basta escolher a ONG que deseja fazer a doação, e encaminhar uma foto ou um escaner do cupom fiscal e clica em (ENVIAR).</P>
 
            </Details>
            <Details>
            <Sumary>Como posso adicionar minha nota fiscal?</Sumary>
                <P>Escanei a sua nota fiscal ou tire uma foto, em seguida faça o upload da foto no site e clique em enviar.</P>
            </Details>

            <Details>
                <Sumary>Como sei que minha nota não esta com o CPF?</Sumary>
                <P>Olhe atentamente para o cupom fiscal.<br></br> Procure por uma seção onde informações do comprador são listadas.<br></br> Normalmente, o CPF do consumidor aparece em uma linha específica, muitas vezes intitulada "CPF do Consumidor" ou algo similar.<br></br>
O CPF pode estar no topo, no meio ou no final do cupom, dependendo do layout do sistema de ponto de venda do estabelecimento.<br></br>O CPF é um número de 11 dígitos formatado como XXX.XXX.XXX-XX. Se você encontrar essa sequência de números, isso indica que o CPF está incluído no cupom.</P>

            </Details>

            <Details>
                <Sumary>Qual valor a ong ganha com cada nota?</Sumary>
                <P>Créditos por Nota: O valor creditado por cada nota fiscal doada depende do valor da compra e do imposto recolhido (ICMS).<br></br> Em geral, o ICMS representa cerca de 7% a 18% do valor da compra, dependendo do produto.<br></br>
Por exemplo, se uma nota fiscal registra uma compra de R$ 100, e o ICMS aplicável é 12%, o imposto recolhido seria R$ 12.<br></br>
A porcentagem desse ICMS que é repassada para a ONG varia, mas geralmente está entre 5% a 30% do valor do ICMS.<br></br>
Portanto, se a porcentagem de repasse for 20%, a ONG receberia R$ 2,40 por essa nota fiscal específica.</P>

            </Details>

            <Details>
                <Sumary>Como se tornar uma ONG parceira?</Sumary>
                <P>...</P>
            </Details>

            <Details>
                <Sumary>Como a ONG pode se cadastrar para ter direito ao benefício?</Sumary>
                <P>....</P>
            </Details>

        </FaqContainer>

    )

}
export default Faq;