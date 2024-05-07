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

function FormularioCadastro(){
    return(
        <FormularioContainer>
            <Texto>
                <a>Primeiro Acesso - Cadastrar Senha</a>
            </Texto>
            <form>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Tipo de Pessoa</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecione uma opção</option>
                        <option value="1">Pessoa Física</option>
                        <option value="2">Pessoa Jurídica</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Nome Completo</label>
                    <input class="form-control" type="text"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Telefone</label>
                    <input class="form-control" type="text"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@examplo.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                    <div id="passwordHelpBlock" class="form-text"> Sua senha deve ter de 8 a 20 caracteres, conter letras e números e não deve conter espaços ou emoji.</div>
                </div>
                <button type="submit" class="btn btn-danger">Concluir Cadastro</button>
            </form>
        </FormularioContainer>
    );
}


export default FormularioCadastro;