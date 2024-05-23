import React from 'react'
import styled from 'styled-components'
import imagefabio from '../assets/18fabio.png'
import imagefabri from '../assets/20fabricio.png'
import imagedaniel from '../assets/19daniel.png'
import imageleonardo from '../assets/21leonardo.png'


const Container = styled.div`
@media only screen and (min-width: 1225px){
    width: 100%;
    max-width: 1200px;
    margin: 100px auto;
    padding: 20px;

}

@media (max-width: 1024px) and (min-width: 769px){
    width: 100%;
    max-width: 1200px;
    margin: 100px auto;
    padding: 20px;
}

@media (max-width: 768px) and (min-width: 481px){
    width: 100%;
    max-width: 1200px;
    margin: 100px auto;
    padding: 20px;
    
}

@media (max-width: 480px) and (min-width: 320px){
    width: 100%;
    max-width: 1200px;
    margin: 100px auto;
    padding: 20px;
} 
`

const Titulo = styled.h1`
`

const Texto = styled.p`
 @media only screen and (min-width: 1225px){
    text-align: justify;  
    padding: 20px 20px 20px 0px;
    column-count:0 ;
    flex-direction: column;
}

@media (max-width: 1024px) and (min-width: 769px){
    text-align: justify;  
    padding: 20px 20px 20px 0px;
    column-count: 0;
}

@media (max-width: 768px) and (min-width: 481px){
    text-align: justify;  
    padding: 20px 20px 20px 0px;
    column-count: 0;
}

@media (max-width: 480px) and (min-width: 320px){
    text-align: justify;  
    padding: 20px 20px 20px 0px;
    column-count: 0;
}       
`

const Fotos = styled.div`
@media only screen and (min-width: 1225px){
    width: 350px;
    padding: 0px;
    display: flex;
    margin-left: 0px;
    padding-right: 450px;
   
}

@media (max-width: 1024px) and (min-width: 769px){
    width: 30px;
    padding: 0px;
    padding-right: 300px;
}

@media (max-width: 768px) and (min-width: 481px){
    width: 30px;
    padding: 0px;
    padding-right:270px;
}

@media (max-width: 480px) and (min-width: 320px){
    width: 30px;
    padding: 0px;
    padding-right:290px;
} 
`

const Conteudo = styled.div`
 @media only screen and (min-width: 1225px){
    display: flex;
    max-width: 50%;
}

@media (max-width: 1024px) and (min-width: 769px){
    display: flex;
    display:table;
}

@media (max-width: 768px) and (min-width: 481px){
    display: flex;
}

@media (max-width: 480px) and (min-width: 320px){
    display: flex;
}
`
const Icone = styled.ul`
    list-style-type: none; 
    display: flex ;
    column-gap: 10px;
    padding-left:10px;  
`

const Linkd = styled.td`

padding-left: 10px;
`

const Bloco = styled.div`
    margin-right: 200px;
`
const Geral = styled.div`
    display:flex;
`


function SobreTodos() {
    return (
        <Container>
            <Titulo> <strong> Quem Somos </strong> </Titulo>
            <hr />
            <Geral>
                <Conteudo>
                    <Texto>
                    Este site, idealizado por estudantes do curso de Análise e Desenvolvimento de Sistemas do Centro Universitário FECAP, tem como objetivo facilitar e tornar mais segura a sua jornada de doação e auxílio ao próximo. Através da plataforma, você conecta-se com ONGs confiáveis que acolhem pessoas, animais e atendem a diversas necessidades.
                    <br></br>Nossa iniciativa surgiu da busca por formas inteligentes de doar, sem comprometer seu orçamento e direcionando recursos para onde realmente fazem a diferença. Sabe aqueles cupons fiscais (CF-e) de compras no mercado, posto de gasolina, farmácia e outros, sem CPF/CNPJ vinculados? Basta tirar uma foto e enviar para a ONG de sua preferência cadastrada em nosso site. Sua doação, mesmo que aparentemente pequena, se soma a outras e gera um impacto significativo na vida de quem precisa.
                    <br></br>Se você conhece uma instituição que ainda não faz parte do nosso projeto, incentive-a a se cadastrar! Compartilhe nossa página e ajude a construir uma rede ainda maior de solidariedade.
                    <br></br>Junte-se a nós e doe com praticidade e segurança. Sua doação, independentemente do valor, contribui para a construção de um mundo mais justo e solidário.
                    </Texto>
                </Conteudo>
                <Fotos>
                    <Bloco style={{ margin: "0 50px" }}>
                        <img src={imagefabio} alt="foto fabio" />
                        <Icone>
                            <li> <a href="https://github.com/FabioSpindola" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 496 512"><path fill="#000" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /> </svg> </a> </li>

                            <li> <a href="https://www.linkedin.com/in/fabiospindola/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 448 512"><path fill="#0A66C2" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>  </a> </li>
                        </Icone>

                        <img src={imageleonardo} alt="foto leonardo" />
                        <Icone>
                            <li> <a href="https://github.com/23025627" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 496 512"><path fill="#000" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /> </svg> </a> </li>
                            <li> <a href="https://www.linkedin.com/in/leonardo-de-souza-mouzinho-5581bb2a8?utm_source=share&utm_campaign=share" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 448 512"><path fill="#0A66C2" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>  </a> </li>
                        </Icone>
                    </Bloco>

                    <Bloco style={{margin: "0 50px" }}>

                        <img src={imagedaniel} alt="foto daniel" />
                        <Icone>
                            <li> <a href="https://github.com/DanBaptista00" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 496 512"><path fill="#000" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /> </svg> </a> </li>
                            <li> <a href="https://www.linkedin.com/in/fabiospindola/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 448 512"><path fill="#0A66C2" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>  </a> </li>
                        </Icone>
                        <img src={imagefabri} alt="foto fabricio" target='blank' />
                        <Icone>
                            <li> <a href="https://github.com/FabricioNasci" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 496 512"><path fill="#000" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /> </svg> </a> </li>
                            <li> <a href="https://www.linkedin.com/in/fabriciocnascimento/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 448 512"><path fill="#0A66C2" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>  </a> </li>
                        </Icone>

                    </Bloco>
                </Fotos>
            </Geral>
        </Container>
    )
}

export default SobreTodos





