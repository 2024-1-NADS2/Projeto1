import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    padding:20px;
    width: 100%;
    max-width: 1200px;
    margin: 100px auto;
`

const Titulo = styled.h1`
  margin: 20px;
`

const Texto = styled.p`
@media only screen and (min-width: 1201px){
    text-align: justify;
    column-count: 2;
    column-gap:40px;
    margin: 30px;
    padding: 0px 20px;
}
@media (max-width: 1200px) and (min-width: 1025px){
    text-align: justify;
    column-count: 2;
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
                <strong>Junte-se a nós e faça a diferença!</strong>
                <br></br>
                <br></br>Ao visitar nosso site, você terá a oportunidade de conhecer todas as ONGs parceiras e o nosso propósito: conectar pessoas dispostas a doar com ONGs que precisam de doações. Através da plataforma, você direciona seu cupom fiscal <strong>"SEM CPF"</strong> para a ONG de sua escolha, que, por sua vez, solicitará o valor retido à prefeitura.
                <br></br>
                <br></br><strong>Para doar seu cupom fiscal:</strong>
                <br></br>
                <br></br>1.	Cadastre-se em nosso site;
                <br></br>2.	Indique a ONG que receberá sua doação.
                <br></br>
                <br></br><strong>Quer ajudar ainda mais?</strong>
                <br></br>
                <br></br>Entre em contato direto com as ONGs para realizar doações de:
                <br></br><strong>Roupas:</strong> de todos os tamanhos, em bom estado;
                <br></br><strong>Alimentos:</strong> não perecíveis preferencialmente, mas em caso de perecíveis, informe a data de validade para que a distribuição seja feita de forma ágil e adequada à necessidade;
                <br></br><strong>Mão de obra:</strong> se você é profissional da saúde, advogado, contador ou de outra área e possui disponibilidade para atender pro bono, entre em contato pelos canais disponíveis no site;
                <br></br><strong>Ração:</strong> para ONGs de animais, você pode doar ração ou qualquer outro item que auxilie na causa;
                <br></br><strong>Valores:</strong> faça sua doação em dinheiro pelos mesmos métodos de contato e acompanhe o destino da sua contribuição.
                <br></br> 
                <br></br><strong>Juntos, podemos construir um futuro melhor para todos!</strong>
            </Texto>

        </Container>

    )
}

export default Funciona
