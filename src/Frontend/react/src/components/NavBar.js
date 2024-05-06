import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavBarContainer = styled.div`
    @media only screen and (min-width: 1201px){  
        display:flex;
        flex-wrap: wrap;
        font-size: 22px;
        justify-content: center;
        align-items: center;
        padding: 20px;
        list-style: none;
        margin: 0;
    }
    @media (max-width: 1200px) and (min-width: 1025px){  
        display:flex;
        flex-wrap: wrap;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        padding: 20px;
        list-style: none;
        margin: 0;
    }
    @media (max-width: 1024px) and (min-width: 769px){  
        display:flex;
        flex-wrap: wrap;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        padding: 20px;
        list-style: none;
        margin: 0;
    }
    @media (max-width: 768px) and (min-width: 481px){  
        display:flex;
        flex-wrap: wrap;
        font-size: 18px;
        justify-content: center;
        align-items: center;
        padding: 20px;
        list-style: none;
        margin: 0;
    }
    @media (max-width: 480px) and (min-width: 320px){  
        display:flex;
        flex-wrap: wrap;
        font-size: 12px;
        justify-content: justify;
        align-items: center;
        padding: 20px;
        list-style: none;
        margin: 0;
    }
`

const StyledLink = styled(Link)`
    @media only screen and (min-width: 1201px){
        color: #000000;
        text-decoration: none;
        margin: 0 0.35em;
        &:hover{
            text-decoration: underline;
            font-weight: bold;
        }
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        color: #000000;
        text-decoration: none;
        margin: 0 0.35em;
        &:hover{
            text-decoration: underline;
            font-weight: bold;
        }
    } 
    @media (max-width: 1024px) and (min-width: 769px){
        color: #000000;
        text-decoration: none;
        margin: 0 0.35em;
        &:hover{
            text-decoration: underline;
            font-weight: bold;
        }
    } 
    @media (max-width: 768px) and (min-width: 481px){
        color: #000000;
        text-decoration: none;
        margin: 0 0.35em;
        &:hover{
            text-decoration: underline;
            font-weight: bold;
        }
    } 
    @media (max-width: 480px) and (min-width: 320px){
        color: #000000;
        text-decoration: none;
        margin: 0 0.35em;
        &:hover{
            text-decoration: underline;
            font-weight: bold;
        }
    } 
`


function NavBar(){
    return(
        <NavBarContainer>
            <StyledLink to="/sobrenos">Sobre Nós</StyledLink><a>|</a>
            <StyledLink to="/pontoscoleta">Pontos de Coleta</StyledLink><a>|</a>
            <StyledLink to="/FAQ">FAQ</StyledLink><a>|</a>
            <StyledLink to="/comofunciona">Como Funciona</StyledLink><a>|</a>
            <StyledLink to="/entidadeparceira">Entidade Parceira</StyledLink>
        </NavBarContainer>
    );
}

export default NavBar;