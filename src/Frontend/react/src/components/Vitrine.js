import styled from "styled-components";
import { Link } from 'react-router-dom';
import LogoAACD from '../assets/logo-aacd-pequeno.png';
import LogoExercito from '../assets/logo-exerc-salvacao-pequeno.png';
import LogoMulheres from '../assets/logo-assoc-mulheres-pequeno.png';

const VitrineContainer = styled.div`
    @media only screen and (min-width: 1201px){  
        display: flex;
        pading: 24px;
        text-align: center;
        font-weight: bold;
        text-alighn: justify;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0;
        p{
            text-align: justify;
            font-weight: normal;
            padding: 10px;
            font-size: 20px;
        }
    }
    @media (max-width: 1200px) and (min-width: 1025px){  
        display: flex;
        pading: 24px;
        text-align: center;
        font-weight: bold;
        text-alighn: justify;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0;
        p{
            text-align: justify;
            font-weight: normal;
            padding: 10px;
            font-size: 20px;
        }
    }
    @media (max-width: 1024px) and (min-width: 769px){  
        display: flex;
        pading: 20px;
        text-align: center;
        font-weight: bold;
        text-alighn: justify;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0;
        p{
            text-align: justify;
            font-weight: normal;
            padding: 10px;
            font-size: 20px;
        }
    }
    @media (max-width: 768px) and (min-width: 481px){  
        display: flex;
        pading: 24px;
        text-align: center;
        font-weight: bold;
        text-alighn: justify;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0;
        p{
            text-align: justify;
            font-weight: normal;
            padding: 10px;
            font-size: 20px;
        }
    }
    @media (max-width: 480px) and (min-width: 320px){  
        display: flex;
        pading: 24px;
        text-align: center;
        font-weight: bold;
        text-alighn: justify;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0;
        p{
            text-align: justify;
            font-weight: normal;
            padding: 10px;
            font-size: 20px;
        }
    }
`

function Vitrine(){
    return(
        <VitrineContainer>
            <div className="row">
                <div className="col-lg-4">
                    <img src={LogoMulheres} alt="Logo Associação de Mulheres Unidas Venceremos" width="140" height="140" class="rounded-circle"/>
                    <rect width="100%" height="100%"></rect>
                    <h2 className="fw-normal">Associação de Mulheres Unidas Venceremos</h2>
                    <p>Clique no botão "Saiba mais" e conheça a Associação de Mulheres Unidas Venceremos, seus projetos, causas e como realizar uma doação.</p>
                    <Link to={"/entidadeparceira"}>
                        <p><a className="btn btn-danger">Saiba mais</a></p>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <img src={LogoExercito} alt="Logo Exercito de Salvação" width="140" height="140" class="rounded-circle"/>
                    <rect width="100%" height="100%"></rect>
                    <h2 className="fw-normal">Exército de Salvação (The Salvation Army)</h2>
                      <p>Clique no botão "Saiba mais" e conheça o Exército de Salvação (The Salvation Army), seus projetos, causas, pontos de coleta e como realizar uma doação.</p>
                    <p><a className="btn btn-danger" href="https://www.exercitodoacoes.org.br/?gclid=CjwKCAjw88yxBhBWEiwA7cm6pUcSHve1H0Fc2ld9C_JgZ5CIg3IMeJVCFXQce8k_YSTmzZYMil6SihoCMl0QAvD_BwE" target="_blank">Saiba mais</a></p>
                </div>
                <div className="col-lg-4">
                    <img src={LogoAACD} alt="Logo AACD" width="140" height="140" class="rounded-circle"/>
                    <rect width="100%" height="100%"></rect>
                    <h2 className="fw-normal">Associação de Assistência à Criança Deficiente</h2>
                    <p>Clique no botão "Saiba mais" e conheça a Associação de Assistência à Criança Deficiente (AACD), seus projetos, causas e como realizar uma doação.</p>
                    <p><a className="btn btn-danger" href="https://aacd.org.br/" target="_blank">Saiba mais</a></p>
                </div>
            </div>
        </VitrineContainer>
    );
}

export default Vitrine;