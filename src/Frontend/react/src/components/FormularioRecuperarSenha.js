import styled from "styled-components";
import React, { useState } from 'react';

const FormularioContainer = styled.div`
    @media only screen and (min-width: 1201px){
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
        align-content: center;
        justify-content: center;
        color: #000000;
        width: 400px;
        text-decoration: none;
        p {
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
        p {
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
        p {
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
        p {
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
        p {
            line-height: 1;
        }
    }
`;

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
`;

function FormularioRecuperarSenha() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = { email, senha };

        try {
            const response = await fetch('https://localhost:7149/api/Recuperar_Senha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            const result = await response.json();
            if (response.ok) {
                setMensagem('Senha redefinida com sucesso.');
            } else {
                setMensagem(result || 'Erro ao redefinir a senha.');
            }
        } catch (error) {
            console.error('Erro:', error);
            setMensagem('Ocorreu um erro ao redefinir a senha.');
        }
    };

    return (
        <FormularioContainer>
            <Texto>
                Alterar Senha
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
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Nova Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,20}"
                        title="Sua senha deve ter de 8 a 20 caracteres, conter letras e números e não deve conter espaços ou emoji."
                        required
                    />
                    <div id="passwordHelpBlock" className="form-text"> Sua senha deve ter de 8 a 20 caracteres, conter letras e números e não deve conter espaços ou emoji.</div>
                </div>
                <button type="submit" className="btn btn-danger">Alterar</button>
                {mensagem && <div className="mt-3">{mensagem}</div>}
            </form>
        </FormularioContainer>
    );
}

export default FormularioRecuperarSenha;
