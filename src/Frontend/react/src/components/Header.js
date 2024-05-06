import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import LogoHorizontal from '../assets/logo-horizontal.png'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const HeaderContainer = styled.header`
    @media only screen and (min-width: 1201px){
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px 10px 0px;
        margin: 0;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px 10px 0px;
        margin: 0;
    }
    @media (max-width: 1024px) and (min-width: 769px){
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px 10px 0px;
        margin: 0;
    }
    @media (max-width: 768px) and (min-width: 481px){
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px 10px 0px;
        margin: 0;
    }
    @media (max-width: 480px) and (min-width: 320px){
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px 10px 0px;
        margin: 0;
    }
`

const Logo = styled.div`
    @media only screen and (min-width: 1201px){
        display: flex;
        max-width: 25%;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        display: flex;
        max-width: 18%;
        img{
            width: 200px;
        }
    }
    @media (max-width: 1024px) and (min-width: 769px){
        display: flex;
        max-width: 30%;
        img{
            width: 200px;
        }
    }
    @media (max-width: 768px) and (min-width: 481px){
        display: flex;
        max-width: 36%;
        img{
            width: 200px;
        }
    }
    @media (max-width: 480px) and (min-width: 320px){
        display: flex;
        max-width: 45%;
        img{
            width: 150px;
        }
    }
`
const BotaoDoacao = styled.div`
    @media only screen and (min-width: 1201px){
        display: flex;
        padding-right: 20px;
        max-width: 12%;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        display: flex;
        padding-right: 10px;
        max-width: 100%;
    }
    @media (max-width: 1024px) and (min-width: 769px){
        display: flex;
        padding-right: 10px;
        max-width: 12%;
    }
    @media (max-width: 768px) and (min-width: 481px){
        display: flex;
        padding-right: 10px;
        max-width: 20%;
    }
    @media (max-width: 480px) and (min-width: 320px){
        display: flex;
        padding-right: 10px;
        max-width: 20%;
        Button{
            font-size: 10px;
        }
    }
`

function Header(){
    return(
        <HeaderContainer>
            <Logo>
                <Link to={"/"}>
                    <img src={LogoHorizontal} alt="Logo DoaMais" />
                </Link>
            </Logo>
            <NavBar />
            <BotaoDoacao>
                <Link to={"/Login"} target="_blank">
                    <Button variant="danger">DOE AGORA</Button>
                </Link>
            </BotaoDoacao>
        </HeaderContainer>
    );
}

export default Header;