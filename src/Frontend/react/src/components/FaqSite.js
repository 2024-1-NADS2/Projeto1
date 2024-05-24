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
        list-style-type: '+ ';

    } 
    @media (max-width: 1024px) and (min-width: 769px){
        font-weight: bold;
        padding: 20px;  
        list-style-type: '+ ';

      } 
    @media (max-width: 768px) and (min-width: 481px){
        font-weight: bold;
        padding: 20px;  
        list-style-type: '+ ';
 
     } 
    @media (max-width: 480px) and (min-width: 320px){
        font-weight: bold;
        padding: 20px;
        list-style-type: '+ ';

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
        max-width: 100%;  
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
        max-width: 100%;  
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
        max-width: 100%;  
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
             <Sumary>Como posso doar para uma ONG parceira?</Sumary>   
                <P>
                    Doar para uma ONG parceira é uma maneira simples e eficaz de contribuir para causas importantes e transformar a realidade de quem mais precisa.
                    <br></br>
                    <br></br><strong>Siga estes passos para realizar sua doação:</strong>
                    <br></br>
                    <br></br><strong>1. Acesse a plataforma de doações:</strong>
                    <br></br>
                    <br></br>•	Clique no botão "DOE AGORA" presente no topo do site.
                    <br></br>
                    <br></br><strong>2. Faça login ou cadastre-se:</strong>
                    <br></br> 
                    <br></br>•	Já possui cadastro? Utilize seu e-mail e senha para fazer login.
                    <br></br>•	Ainda não é doador? Clique em "Ainda não sou doador" e preencha o formulário de cadastro com seus dados pessoais.
                    <br></br>•	Após concluir o cadastro, faça login para prosseguir com a doação.
                    <br></br>
                    <br></br><strong>3. Selecione a ONG e defina o valor da doação:</strong>
                    <br></br>
                    <br></br>•	Na página de doação, escolha a ONG que deseja beneficiar com sua contribuição.
                    <br></br>•	Informe o e-mail cadastrado.
                    <br></br>•	Informe o valor do cupom que você deseja doar.
                    <br></br>•	Anexe uma foto do cupom fiscal.
                    <br></br>•	Revise os dados informados e clique no botão "Enviar" para finalizar a doação.
                    <br></br>
                    <br></br><strong>Sua doação está feita!</strong>
                    <br></br>
                    <br></br>Para doar diretamente a uma ONG basta contactala por um dos canais divulgado em nosso site.
                </P>
            </Details>

            <Details>
                <Sumary>Como sei que minha nota não esta com o CPF?</Sumary>
                <P>Olhe atentamente para o cupom fiscal.<br></br> Procure por uma seção onde informações do comprador são listadas.<br></br> Normalmente, o CPF do consumidor aparece em uma linha específica, muitas vezes intitulada "CPF do Consumidor" ou algo similar.<br></br>
O CPF pode estar no topo, no meio ou no final do cupom, dependendo do layout do sistema de ponto de venda do estabelecimento.<br></br>O CPF é um número de 11 dígitos formatado como XXX.XXX.XXX-XX. Se você encontrar essa sequência de números, isso indica que o CPF está incluído no cupom.</P>

            </Details>

            <Details>
                <Sumary>Qual valor a ONG ganha com cada nota recebida?</Sumary>
                <P>O valor creditado por cada nota fiscal doada depende do valor da compra e do imposto (ICMS) recolhido pelo vendedor.<br></br> Em geral, o ICMS representa cerca de 7% a 18% do valor da compra, dependendo do produto.<br></br>
Por exemplo, se uma nota fiscal registra uma compra de R$ 100,00, e o ICMS aplicável é 12%, o imposto recolhido seria R$ 12,00.<br></br>
A porcentagem desse ICMS que é repassada para a ONG varia, mas geralmente está entre 5% a 30% do valor do ICMS.<br></br>
Portanto, se a porcentagem de repasse for 20%, a ONG receberia R$ 2,40 por essa nota fiscal específica.</P>

            </Details>

            <Details>
                <Sumary>Como se tornar uma ONG parceira da DoaMais?</Sumary>
                <P>
                    Para se tornar uma ONG parceira da DoaMais siga estes passos:
                    <br></br>
                    <br></br><strong>1. Reúna as informações e documentos necessários:</strong>
                    <br></br>
                    <br></br>•	Razão Social: Nome completo da sua organização, conforme consta em seu registro oficial.
                    <br></br>•	CNPJ: Número do Cadastro Nacional de Pessoas Jurídicas da sua ONG.
                    <br></br>•	Telefone para contato: Número de telefone com DDD e código de área para que possamos entrar em contato com você.
                    <br></br>•	E-mail para contato: Endereço de e-mail oficial da sua ONG, utilizado para comunicação regular.
                    <br></br>•	Estatuto Social da ONG (documento oficial): Cópia digitalizada do estatuto social da sua organização, em formato PDF. Este documento comprova a sua missão, valores e objetivos.
                    <br></br>
                    <br></br><strong>2. Envie um e-mail para nossa equipe:</strong>
                    <br></br>
                    <br></br>•	Envie um e-mail para contato.doamais@hotmail.com com o assunto “Cadastro ONG Parceira” anexando a documentação solicitada.
                    <br></br>
                    <br></br><strong>3. Aguarde nosso retorno:</strong>
                    <br></br>
                    <br></br> •	Analisaremos sua solicitação e entraremos em contato com você o mais breve possível.
                    <br></br> •	Caso sua ONG atenda aos critérios de parceria da DoaMais, enviaremos um e-mail com as próximas etapas do processo.
                    <br></br>
                    <br></br><strong>Lembre-se:</strong>
                    <br></br>
                    <br></br>•	Somente serão aceitas solicitações de ONGs sem fins lucrativos, devidamente registradas e em situação regular junto aos órgãos competentes.
                    <br></br>•	A DoaMais se reserva o direito de avaliar cada solicitação e selecionar as ONGs que se alinham à nossa missão e valores.
                    <br></br>
                    <br></br>Agradecemos seu interesse em se tornar uma ONG parceira da DoaMais!
                    <br></br>Juntos, podemos fazer a diferença.
                </P>
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