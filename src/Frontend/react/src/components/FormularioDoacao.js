import styled from "styled-components";
import { Link } from 'react-router-dom';

const FormularioContainer= styled.div`
    @media only screen and (min-width: 1201px){
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
        align-content: center;
        justify-content: center;
        color: #000000;
        width: 500px;
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

function FormularioCupom(){
    return(
        <FormularioContainer>
            <Texto>
                <a>Doação de Cupom Fiscal</a>
            </Texto>
            <form>
            <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div class="form-text" id="basic-addon4">Informe o e-mail cadastrado.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">ONG Beneficiada</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecione uma opção</option>
                        <option value="1">ASSOCIAÇÃO DE ASSISTÊNCIA À CRIANÇA DEFICIENTE</option>
                    </select>
                </div>
                    <label for="exampleFormControlInput1" class="form-label">Valor do Cupom Fiscal</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text">R$</span>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest real)"/>
                    </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Escolha um arquivo</label>
                    <div class="input-group">
                        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                        <button class="btn btn-outline-danger" type="button" id="inputGroupFileAddon04">Enviar</button>
                    </div>
                    <div class="form-text" id="basic-addon4">Realize o envio somente de arquivos em .JPG ou .PNG.</div>
                </div>
            </form>
        </FormularioContainer>
    );
}


export default FormularioCupom;