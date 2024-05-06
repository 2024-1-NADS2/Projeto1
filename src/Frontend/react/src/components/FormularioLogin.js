import styled from "styled-components";
import { Link } from 'react-router-dom';

const FormularioContainer= styled.div`
    @media only screen and (min-width: 1201px){
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
        align-content: center;
        justify-content: center;
        color: #000000;
        width: 400px;
        text-decoration: none;
        p{
            line-height: 1;
        }
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
        align-content: center;
        justify-content: center;
        color: #000000;
        width: 400px;
        text-decoration: none;
        p{
            line-height: 1;
        }
    }
    @media (max-width: 1024px) and (min-width: 769px){
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
        align-content: center;
        justify-content: center;
        color: #000000;
        width: 400px;
        text-decoration: none;
        p{
            line-height: 1;
        }
    }
    @media (max-width: 768px) and (min-width: 481px){
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
        align-content: center;
        justify-content: center;
        color: #000000;
        width: 400px;
        text-decoration: none;
        p{
            line-height: 1;
        }
    }
    @media (max-width: 480px) and (min-width: 320px){
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
        align-content: center;
        justify-content: center;
        color: #000000;
        width: 400px;
        text-decoration: none;
        p{
            line-height: 1;
        }
    }
`
const Texto = styled.div`
    @media only screen and (min-width: 1201px){
        font-weight: bold;
        font-size: 26px;
        padding-bottom: 20px;
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        font-weight: bold;
        font-size: 26px;
        padding-bottom: 20px;
    }
    @media (max-width: 1024px) and (min-width: 769px){
        font-weight: bold;
        font-size: 26px;
        padding-bottom: 20px;
    }
    @media (max-width: 768px) and (min-width: 481px){
        font-weight: bold;
        font-size: 20px;
        padding-bottom: 20px;
    }
    @media (max-width: 480px) and (min-width: 320px){
        font-weight: bold;
        font-size: 26px;
        padding-bottom: 20px;
    }
`

const StyledLink = styled(Link)`
    @media only screen and (min-width: 1201px){
        text-decoration: none;
        &:hover{
            font-weight: bold;
        }
    }
    @media (max-width: 1200px) and (min-width: 1025px){
        text-decoration: none;
        &:hover{
            font-weight: bold;
        }
    }
    @media (max-width: 1024px) and (min-width: 769px){
        text-decoration: none;
        &:hover{
            font-weight: bold;
        }
    }
    @media (max-width: 768px) and (min-width: 481px){
        text-decoration: none;
        &:hover{
            font-weight: bold;
        }
    }
    @media (max-width: 480px) and (min-width: 320px){
        text-decoration: none;
        &:hover{
            font-weight: bold;
        }
    }
`


function FormularioLogin(){
    return(
        <FormularioContainer>
            <Texto>
                <a>Entrar / Criar conta</a>
            </Texto>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <p><StyledLink to="/">Esqueci a Senha</StyledLink></p>
                <p><StyledLink to="/">Ainda não sou Doador</StyledLink></p>
                <button type="submit" class="btn btn-danger">Acessar</button>
            </form>
        </FormularioContainer>
    );
}


export default FormularioLogin;