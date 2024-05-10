import React from 'react'
import styled from 'styled-components'
import imagefabio from '../assets/foto_fabio.jpg'
import imagefabri from '../assets/foto_fabricio.jpg'



const Titulo = styled.h1`
  
`

const Texto = styled.p`
    
    
    
    text-align: justify; 
   
   
`

const Foto = styled.img`
    
    width: 200px;
    padding: 20px;
    padding-left:50px;

`

const Conteudo = styled.div`
    
    display: flex;
    padding: 20px;
`

const Container = styled.div`

    padding: 100px;

`
const handlePhotoClick = () => {
   
  };


function SobreTodos() {
    return (
        <Container>
            <Titulo> Quem Somos </Titulo>
            <hr/>
            <Conteudo>

                <Texto>

                    Este site foi criado por estudantes do curso de Análise e Desenvolvimento de Sistemas do Centro Universitário - Fundação Escola de Comércio Álvares Penteado (FECAP), tendo como objetivo ajudar você de forma rápida e segura a criar ou ampliar o hábito de ajudar o próximo, por meio de ONG’s, que por sua vez, já fazem um trabalho de acolhimento a pessoas, animais e demais necessidades.
                    Iniciamos este projeto observando a oportunidade de doar de forma inteligente sem comprometer sua renda e com um valor que na maioria das vezes volta aos cofres públicos.
                    Sabe aquele cupom fiscal (CF-e) de compras de mercado, posto de gasolina, farmácia e etc sem CPF/CNPJ atrelado a ele? É só você tirar uma foto e envia-lo para a organização de sua preferência cadastrada em nosso site. Caso você conheça uma instituição que ainda não é apoiada pelo projeto, compartilhe nossa página para que ela também possa se tornar uma parceira.
                    <br></br>E aí, vamos ajudar o próximo?
                </Texto>

                <table>

                    <td>
                        <a href='https://github.com/FabioSpindola'>
                            <Foto src={imagefabio} alt="foto fabio" onClick={handlePhotoClick}/>
                        </a>


                        <a href='https://github.com/FabioSpindola'>
                            <Foto src={imagefabio} alt="foto fabio" />
                        </a>
                    </td>

                    <td>
                        <a href='https://github.com/FabricioNasci'>
                            <Foto src={imagefabri} alt="foto fabricio" />
                        </a>

                        <a href='https://github.com/FabricioNasci'>
                            <Foto src={imagefabri} alt="foto fabricio" />
                        </a>

                    </td>

                </table>

            </Conteudo>



        </Container>
    )
}

export default SobreTodos
