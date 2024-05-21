import React, { useState } from 'react';
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


function FormularioLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginData = {
            email: email,
            senha: senha
        };

        try {
            const response = await fetch('https://localhost:7149/api/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            if (response.ok) {
                const data = await response.text();
                setMessage(data);
            } else {
                if (response.status === 401) {
                    setMessage('Senha incorreta.');
                } else if (response.status === 404) {
                    setMessage('Usuário não encontrado.');
                } else {
                    setMessage('Erro no servidor.');
                }
            }
        } catch (error) {
            setMessage('Erro ao conectar com o servidor.');
        }
    };

    return (
        <FormularioContainer>
            <Texto>
                <a>Entrar / Criar conta</a>
            </Texto>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <p><StyledLink to="/recuperarsenha">Esqueci a Senha</StyledLink></p>
                <p><StyledLink to="/cadastro">Ainda não sou Doador</StyledLink></p>
                <button type="submit" className="btn btn-danger">Acessar</button>
                {message && <p>{message}</p>}
            </form>
        </FormularioContainer>
    );
}

export default FormularioLogin;