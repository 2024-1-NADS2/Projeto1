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
    list-style-type: '+ ';

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
        margin-top: 40px;
        background-color:#fff;
        border-radius:10px;
        max-width: 100%;  
        box-shadow: 10px 10px 5px  grey;      
        &:not([open]) {
    background-color: #fff;
        }
     
}
    @media (max-width: 1200px) and (min-width: 1025px){
        padding:10PX;
        text-align: justify;
        margin-top: 40px;
        background-color:#fff;
        border-radius:10px;
        max-width: 50%;  
        box-shadow: 10px 10px 5px  grey;      
        &:not([open]) {
    background-color: #fff;
        }

    } 
    @media (max-width: 1024px) and (min-width: 769px){
        padding:10PX;
        text-align: justify;
        margin-top: 40px;
        background-color:#fff;
        border-radius:10px;
        max-width: 60%;  
        box-shadow: 10px 10px 5px  grey;      
        &:not([open]) {
    background-color: #fff;
        }

    } 
    @media (max-width: 768px) and (min-width: 481px){
        padding:10PX;
        text-align: justify;
        margin-top: 40px;
        background-color:#fff;
        border-radius:10px;
        max-width: 70%;  
        box-shadow: 10px 10px 5px  grey;      
        &:not([open]) {
    background-color: #fff;
        }

    } 
    @media (max-width: 480px) and (min-width: 320px){
        padding:10PX;
        text-align: justify;
        margin-top: 40px;
        background-color:#fff;
        border-radius:10px;
        max-width: 100%;  
        box-shadow: 10px 10px 5px  grey;      
        &:not([open]) {
    background-color: #fff;
        }

    } 
    
`
const P = styled.p`
  @media only screen and (min-width: 1201px){
        padding: 20px;
        text-align: justify;
        background-color:#fff;
        border-radius:10px;
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
const Span = styled.span`
    font-weight: bold;
`



function Faq(){

    return (

        <FaqContainer>  

            <FaqH1> Dúvidas Frequentes </FaqH1>


            <Details>
             <Sumary>Como posso doar para uma Ong parceira?</Sumary>   
               <P>Acesse o nosso site.<br></br>
Clique na opção "DOE AGORA".<br></br>
Clique em "Ainda não sou doador".<br></br>
Preencha o formulário com seus dados pessoais.<br></br>
Envie o formulário para completar seu cadastro.<br></br>
Após ter concluído o cadastro Faça o login no site usando suas credenciais.<br></br>
Escolha a ONG para a qual deseja fazer a doação.<br></br>
Encaminhe uma foto ou um escaneamento do seu cupom fiscal.<br></br>
Clique no botão "ENVIAR" para finalizar a doação.</P>
 
            </Details>
            <Details>
            <Sumary>Como posso adicionar minha nota fiscal?</Sumary>
                <P>Utilize um scanner para digitalizar a nota fiscal ou a câmera do seu smartphone para tirar uma foto clara e legível da nota fiscal.<br></br>
                Acesse o nosso site e faça login com suas credenciais.<br></br>
Navegue até a seção de doações ou a área específica para enviar a nota fiscal.<br></br>
Clique no botão "Escolher arquivo" ou "Selecionar arquivo".<br></br>
Encontre e selecione a foto ou o arquivo escaneado da sua nota fiscal no seu dispositivo.</P>
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
                <P>Reúna as seguintes informações e documentos:<br></br>
                    Razão Social <br></br>
                    CNPJ <br></br>
                    Telefone para contato<br></br>
                    E-mail para contato<br></br>
                    Estatuto Social da ONG (documento oficial)<br></br>
                    Abra seu email.<br></br>
                Crie uma nova mensagem de e-mail.<br></br> 
                No campo "Para", insira o endereço de e-mail de nossa equipe - <Span>contato.doamais@hotmail.com</Span><br></br>
                No corpo do e-mail, inclua as seguintes informações:<br></br>
                Razão Social da ONG<br></br>
                CNPJ da ONG<br></br>
                Telefone para contato<br></br>
                E-mail para contato<br></br>
                Clique no ícone de anexar arquivo (geralmente representado por um clipe de papel).<br></br>
                Selecione o arquivo do Estatuto Social da ONG do seu computador e anexe-o ao e-mail.<br></br>
                Nossa equipe revisará sua solicitação e entrará em contato através do e-mail fornecido para confirmar a parceria ou solicitar informações adicionais, se necessário.</P>
            </Details>

            <Details>
                <Sumary>Como a ONG pode se cadastrar para ter direito ao benefício?</Sumary>
                <P>Acesse o site da Nota Fiscal Paulista <Span>https://www.nfp.fazenda.sp.gov.br</Span><br></br>
                Faça login com seu CNPJ e senha.<br></br>
                Caso não tenha cadastro crie um para poder ter acesso.<br></br>
                Preencha o formulário de adesão ao programa.<br></br>
                Envie os documentos solicitados, como o estatuto social e o comprovante de inscrição no CNPJ.<br></br>
                Aguarde a aprovação e o cadastro da ONG no programa.</P>
            </Details>

        </FaqContainer>

    )

}
export default Faq;