import styled from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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

function FormularioCadastro() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [tipoPessoa, setTipoPessoa] = useState('');
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usuario = {
            nome,
            senha,
            email,
            telefone,
            tipo_pessoa: tipoPessoa === 'Pessoa Física' ? 0 : 1,
        };

        try {
            const response = await fetch('https://doamaisapi.azurewebsites.net/api/Criacao_Usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`${errorData.message}`);
                navigate('/login');
                return;
            }
            else{navigate('/login');}

            const result = await response.json();
            alert(result);
            navigate('/login');
        } catch (error) {
            alert(`Erro na comunicação com o servidor: ${error.message}`);
        }
    };


    return (
        <FormularioContainer>
            <Texto>
                <a>Primeiro Acesso - Cadastrar Senha</a>
            </Texto>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="tipoPessoa" className="form-label">Tipo de Pessoa</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={tipoPessoa}
                        onChange={(e) => setTipoPessoa(e.target.value)}
                        required
                    >
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="Pessoa Física">Pessoa Física</option>
                        <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome Completo</label>
                    <input
                        className="form-control"
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input
                        className="form-control"
                        type="text"
                        id="telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    <div id="passwordHelpBlock" className="form-text">
                        Sua senha deve ter de 8 a 20 caracteres, conter letras e números e não deve conter espaços ou emoji.
                    </div>
                </div>
                <button type="submit" className="btn btn-danger">Concluir Cadastro</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </FormularioContainer>
    );
}

export default FormularioCadastro;