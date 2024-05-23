import styled from "styled-components";
import LogoNome from '../assets/logo-nome-branco.png';
import { Link } from 'react-router-dom';


const FooterContainer = styled.div`
    @media only screen and (min-width: 1201px){
        background-color: #198754;
        padding: 20px;
        color: #FFFF;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 0;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        background-color: #198754;
        padding: 20px;
        color: #FFFF;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 0;
    }
    @media (max-width: 1024px) and (min-width: 769px){
        background-color: #198754;
        padding: 20px;
        color: #FFFF;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 0;
    }
    @media (max-width: 768px) and (min-width: 481px){
        background-color: #198754;
        padding: 20px;
        color: #FFFF;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 0;
    }
    @media (max-width: 480px) and (min-width: 320px){
        background-color: #198754;
        padding: 20px;
        color: #FFFF;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 0;
        width:100%;
    }
`
const Logo = styled.div`
    @media only screen and (min-width: 1201px){
        text-align: left;
        flex: 1;
        max-width: 30%;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        text-align: left;
        flex: 1;
        max-width: 30%;
        img{
            width: 150px;
        }
    }
    @media (max-width: 1024px) and (min-width: 769px){
        text-align: left;
        flex: 1;
        max-width: 20%;
    }
    @media (max-width: 768px) and (min-width: 481px){
        text-align: left;
        flex: 1;
        max-width: 100%;
        img{
            width: 125px;
        }
    }
    @media (max-width: 480px) and (min-width: 320px){
        text-align: left;
        flex: 1;
        max-width: 100%;
        img{
            width: 100px;
        }
    }
`
const Contato = styled.div`
    @media only screen and (min-width: 1201px){
        flex: 1;
        text-align: left;
        max-width: 30%;
        color: #FFFF;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul li{
            padding-top: 10px;
        }
        li a{
            text-decoration: none;
            color: #f2f2f2;
            text-align: center;
            &:hover{
                font-weight: bold;
            }
        }
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        flex: 1;
        text-align: left;
        max-width: 30%;
        color: #FFFF;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul li{
            padding-top: 10px;
        }
        li a{
            text-decoration: none;
            color: #f2f2f2;
            text-align: center;
            &:hover{
                font-weight: bold;
            }
        }
    }
    @media (max-width: 1024px) and (min-width: 769px){
        flex: 1;
        text-align: left;
        max-width: 59%;
        color: #FFFF;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul li{
            padding-top: 10px;
        }
        li a{
            text-decoration: none;
            color: #f2f2f2;
            text-align: center;
            &:hover{
                font-weight: bold;
            }
        }
    }
    @media (max-width: 768px) and (min-width: 481px){
        flex: 1;
        text-align: left;
        max-width: 100%;
        color: #FFFF;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul li{
            padding-top: 10px;
        }
        li a{
            text-decoration: none;
            color: #f2f2f2;
            text-align: center;
            &:hover{
                font-weight: bold;
            }
        }
    }
    @media (max-width: 480px) and (min-width: 320px){
        flex: 1;
        text-align: left;
        max-width: 100%;
        color: #FFFF;
        font-size: 18px;
        ul{
            list-style-type: none;
        }
        ul li{
            padding-top: 10px;
        }
        li a{
            text-decoration: none;
            color: #f2f2f2;
            text-align: center;
            &:hover{
                font-weight: bold;
            }
        }
    }
`
const Links = styled.div`
    @media only screen and (min-width: 1201px){
        flex: 1;
        text-align: left;
        max-width: 30%;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul li{
            padding-top: 10px;
        }
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        flex: 1;
        text-align: left;
        max-width: 30%;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul li{
            padding-top: 10px;
        }
    }
    @media (max-width: 1024px) and (min-width: 769px){
        flex: 1;
        text-align: left;
        max-width: 30%;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul li{
            padding-top: 10px;
        }
    }
    @media (max-width: 768px) and (min-width: 481px){
        flex: 1;
        text-align: left;
        max-width: 100%;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul li{
            padding-top: 10px;
        }
    }
    @media (max-width: 480px) and (min-width: 320px){
        flex: 1;
        text-align: left;
        max-width: 100%;
        font-size: 18px;
        ul{
            list-style-type: none;
        }
        ul li{
            padding-top: 10px;
        }
    }
`
const StyledLink = styled(Link)`
    @media only screen and (min-width: 1201px){
        color: #FFFF;
        text-decoration: none;
        &:hover{
            font-weight: bold;
        }
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        color: #FFFF;
        text-decoration: none;
        &:hover{
            font-weight: bold;
        }
    }
    @media (max-width: 1024px) and (min-width: 769px){
        color: #FFFF;
        text-decoration: none;
        &:hover{
            font-weight: bold;
        }
    }
    @media (max-width: 768px) and (min-width: 481px){
        color: #FFFF;
        text-decoration: none;
        &:hover{
            font-weight: bold;
        }
    }
    @media (max-width: 480px) and (min-width: 320px){
        color: #FFFF;
        text-decoration: none;
        &:hover{
            font-weight: bold;
        }
    }
`
const GitHub = styled.div`
    @media only screen and (min-width: 1201px){
        flex: 1;
        text-align: left;
        max-width: 30%;
        color: #FFFF;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul strong{
            text-align: center;
        }
        ul li{
            padding-top: 10px;
        }
        li a{
            text-decoration: none;
            color: #f2f2f2;
            text-align: center;
            &:hover{
                font-weight: bold;
            }
        }
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        flex: 1;
        text-align: left;
        max-width: 30%;
        color: #FFFF;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul strong{
            text-align: center;
        }
        ul li{
            padding-top: 10px;
        }
        li a{
            text-decoration: none;
            color: #f2f2f2;
            text-align: center;
            &:hover{
                font-weight: bold;
            }
        }
    }
    @media (max-width: 1024px) and (min-width: 769px){
        flex: 1;
        text-align: left;
        max-width: 17%;
        color: #FFFF;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul strong{
            text-align: center;
        }
        ul li{
            padding-top: 10px;
        }
        li a{
            text-decoration: none;
            color: #f2f2f2;
            text-align: center;
            &:hover{
                font-weight: bold;
            }
        }
    }
    @media (max-width: 768px) and (min-width: 481px){
        flex: 1;
        text-align: left;
        max-width: 100%;
        color: #FFFF;
        font-size: 20px;
        ul{
            list-style-type: none;
        }
        ul strong{
            text-align: center;
        }
        ul li{
            padding-top: 10px;
        }
        li a{
            text-decoration: none;
            color: #f2f2f2;
            text-align: center;
            &:hover{
                font-weight: bold;
            }
        }
    }
    @media (max-width: 480px) and (min-width: 320px){
        flex: 1;
        text-align: left;
        max-width: 100%;
        color: #FFFF;
        font-size: 18px;
        ul{
            list-style-type: none;
        }
        ul strong{
            text-align: center;
        }
        ul li{
            padding-top: 10px;
        }
        li a{
            text-decoration: none;
            color: #f2f2f2;
            text-align: center;
            &:hover{
                font-weight: bold;
            }
        }
    }
`
const Bottom = styled.div`
    @media only screen and (min-width: 1201px){
        margin: 0;
        vertical-align: baseline;
        text-align: center;
        font-size: 14px;
        flex-basis: 2400px;
        padding-top: 20px;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        margin: 0;
        vertical-align: baseline;
        text-align: center;
        font-size: 14px;
        flex-basis: 2400px;
        padding-top: 20px;
    }
    @media (max-width: 1024px) and (min-width: 769px){
        margin: 0;
        vertical-align: baseline;
        text-align: center;
        font-size: 14px;
        flex-basis: 2400px;
        padding-top: 20px;
    }
    @media (max-width: 768px) and (min-width: 481px){
        margin: 0;
        vertical-align: baseline;
        text-align: center;
        font-size: 14px;
        flex-basis: 2400px;
        padding-top: 20px;
    }
    @media (max-width: 480px) and (min-width: 320px){
        margin: 0;
        vertical-align: baseline;
        text-align: center;
        font-size: 14px;
        flex-basis: 2400px;
        padding-top: 20px;
    }
`

function Footer() {
    return (
        <FooterContainer>

            <Logo>
                <Link to={"/"}>
                    <img src={LogoNome} alt="Logo DoaMais" />
                </Link>
            </Logo>
            <Contato>
                <ul>
                    <strong>ENTRE EM CONTATO</strong>
                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /> </svg><a href="mailto:contato.doamais@hotmail.com"> Fale Conosco</a></li>
                </ul>
            </Contato>
            <Links>
                <ul>
                    <strong>LINKS RÁPIDOS</strong>
                    <li><StyledLink to="/sobrenos">Sobre Nós</StyledLink></li>
                    <li><StyledLink to="/pontoscoleta">Pontos de Coleta</StyledLink></li>
                    <li><StyledLink to="/FAQ">FAQ</StyledLink></li>
                    <li><StyledLink to="/comofunciona">Como Funciona</StyledLink></li>
                    <li><StyledLink to="/entidadeparceira">Entidade Parceira</StyledLink></li>
                </ul>
            </Links>
            <GitHub>
                <ul>
                    <strong>GitHub</strong>
                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 496 512"><path fill="#ffffff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg><a href="https://github.com/2024-1-NADS2/Projeto1" target="_blank"> GitHub</a></li>
                </ul>
            </GitHub>
            <Bottom>
                <p>DoaMais © 2024 by Daniel Baptista, Fabio Spindola, Fabricio Nascimento, Leonardo de Souza is licensed under Creative Commons Attribution 4.0 International</p>
            </Bottom>
        </FooterContainer>

    );
}

export default Footer;