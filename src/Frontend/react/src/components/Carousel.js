import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import FotoAssocMulheres from '../assets/foto_ong_home.png';
import FotoRGS from '../assets/foto_rgs.png';

const CarouselContainer = styled.div`
    @media only screen and (min-width: 1201px){
        margin: 0;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        margin: 0;
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        margin: 0;
    } 
    @media (max-width: 768px) and (min-width: 481px){
        margin: 0;
        img{
            height: 325px;
        }
    } 
    @media (max-width: 480px) and (min-width: 320px){
        margin: 0;
        img{
            height: 325px;
        }
    } 
`

function CarouselHome(){
    return(
        <CarouselContainer>
            <Carousel variant="light">
                <Carousel.Item>
                    <Link to="/entidadeparceira">
                    <img
                        className="d-block w-100"
                        src={FotoAssocMulheres}
                        alt="Associação de Mulheres Unidas Venceremos"
                    />
                    <Carousel.Caption>
                        <h3>Associação de Mulheres Unidas Venceremos</h3>
                        <p>Conheça a Associação de Mulheres Unidas Venceremos</p>
                    </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="https://sosenchentes.rs.gov.br/inicial" target="_blank">
                    <img
                        className="d-block w-100"
                        src={FotoRGS}
                        alt="Banner ajuda Rio Grande do SUL"
                    />
                    <Carousel.Caption>
                        <h3>Ajude as vítimas das enchentes no Rio Grande do Sul</h3>
                        <p>Saiba como ajudar as vítimas das inundações ocorridas no Rio Grande do Sul</p>
                    </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/">
                    <img
                        className="d-block w-100"
                        src="https://placehold.co/834x240/png"
                        alt="Segundo slide"
                    />
                    <Carousel.Caption>
                        <h3>Terceiro Slide</h3>
                        <p>Descrição do terceiro slide.</p>
                    </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            </Carousel>
        </CarouselContainer>
    );
}

export default CarouselHome;