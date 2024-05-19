import styled from "styled-components"; 
import React from "react";


const FaqContainer = styled.div`
    padding: 20px;

`

const FaqH1 = styled.h1`
    align-items: center;
    font-weight: bold;
    text-align:center;
`
const Sumary = styled.summary`
    font-weight: bold;
    padding: 20px;

`
const FaqH4 = styled.h4`
    text-align: left;
    font-weight: bold;
    padding: 20px;
    margin-top: 20px;
`
const Details = styled.details`
    padding:10PX;
    text-align: justify;
`
const P = styled.p`
     padding: 20px;
    text-align: justify;
`



function Faq(){

    return (

        <FaqContainer>  
            <FaqH1> Dúvidas </FaqH1>
            <FaqH4>Perguntas Frequentes</FaqH4>
            <Details>
             <Sumary>Como posso doar para uma Ong parceira</Sumary>   
               <P>Para se inscrever como doador, faça seu cadastro em poucos passos no nosso site.</P> 
            </Details>
            <Details>
            <Sumary>Como posso adicionar minha nota fiscal</Sumary>
                    <P>oi</P>
            </Details>

            <Details>
                <Sumary>Como sei que minha nota não esta com o CPF?</Sumary>
                <P>oi</P>

            </Details>

            <Details>
                <Sumary>Qual valor a ong ganha com cada nota?</Sumary>
                <P>oi</P>

            </Details>





        </FaqContainer>



    )



}
export default Faq;