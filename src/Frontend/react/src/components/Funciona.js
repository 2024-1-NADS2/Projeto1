import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    padding:20px;
`

const Titulo = styled.h1`
  margin: 20px;
`

const Texto = styled.p`
@media only screen and (min-width: 1201px){
    text-align: justify;
    column-count: 3;
    margin: 30px;
}
@media (max-width: 1200px) and (min-width: 1025px){
    text-align: justify;
    column-count: 3;
    margin: 30px;
}
@media (max-width: 1024px) and (min-width: 769px){
    text-align: justify;
    column-count: 2;
    margin: 30px;
}
@media (max-width: 768px) and (min-width: 481px){
    text-align: justify;
    column-count: 2;
    margin: 30px;
}

@media (max-width: 480px) and (min-width: 320px){
    text-align: justify;
    column-count: 1;
    margin: 30px;
}
`


function Funciona() {

    return (
        <Container>
            <Titulo> <strong>A doação funciona assim </strong> </Titulo>
            <hr />
            <Texto>
                Ao entrar em nosso site você poderá conhece todas as nossas Ongs parceiras e o objetivo do site é unir pessoas querendo doar a ongs precisando de doações e está e o nosso meio de ajudar ambas as partes é direcionar o seu cupom fiscal<strong> “SEM CPF”</strong> para a ong parceira da sua escolha que   por sua vez fará o pedido junto a prefeitura do imposto retido.<br></br>
                Para isso deverá se cadastrar em nosso site indicar a ONG que irá receber seu cupom fiscal.<br></br>
                Caso você possa ajudar mais entrar em contato com elas para efetuar doações diretas como (Roupas, alimentos, mão de obra, Ração, professor, Valores). Roupa de todos os tamanhos em situação de  uso, alimentos de preferência não perecíveis mas em caso de perecíveis deixar claro a data de vencimento para que eles possam direcionar rapidamente as pessoas conforme a necessidade, mão de obra; se você é profissional da Saúde/Advogado/Contador entre outros com disponibilidade de atendimento pró Bono entre em contato pelos meios indicados pelo site, rações; em caso ong de animais você poderá efetuar essa doação ou qualquer outro itens que possa ajudá-los no dia dos pet friend’s, Professores de qualquer área profissionalizante você pode dar um novo sentido a vidas dessas pessoas em caso valores pelos mesmos métodos de contato receberá todas as informações e poderá acompanhar o destino da sua doação.
            </Texto>

        </Container>

    )
}

export default Funciona
