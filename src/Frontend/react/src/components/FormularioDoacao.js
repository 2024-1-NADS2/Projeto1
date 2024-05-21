import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FormularioContainer = styled.div`
    @media only screen and (min-width: 1201px) {
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
        align-content: center;
        justify-content: center;
        color: #000000;
        width: 500px;
        text-decoration: none;
        p {
            line-height: 1;
        }
    }
    @media (max-width: 1200px) and (min-width: 1025px) {
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
    @media (max-width: 1024px) and (min-width: 769px) {
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
    @media (max-width: 768px) and (min-width: 481px) {
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
    @media (max-width: 480px) and (min-width: 320px) {
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
    @media only screen and (min-width: 1201px) {
        font-weight: bold;
        font-size: 26px;
        padding-bottom: 20px;
    }
    @media (max-width: 1200px) and (min-width: 1025px) {
        font-weight: bold;
        font-size: 26px;
        padding-bottom: 20px;
    }
    @media (max-width: 1024px) and (min-width: 769px) {
        font-weight: bold;
        font-size: 26px;
        padding-bottom: 20px;
    }
    @media (max-width: 768px) and (min-width: 481px) {
        font-weight: bold;
        font-size: 20px;
        padding-bottom: 20px;
    }
    @media (max-width: 480px) and (min-width: 320px) {
        font-weight: bold;
        font-size: 26px;
        padding-bottom: 20px;
    }
`;

function FormularioCupom() {
    const [email, setEmail] = useState('');
    const [ongBeneficiada, setOngBeneficiada] = useState('');
    const [valorCupom, setValorCupom] = useState('');
    const [arquivo, setArquivo] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validação adicional para o valor do cupom
        if (isNaN(valorCupom) || parseFloat(valorCupom) <= 0) {
            alert('Por favor, insira um valor válido para o cupom.');
            setLoading(false);
            return;
        }

        const cupom = {
            data_envio: new Date().toISOString(),
            ong_beneficiada: ongBeneficiada,
            valor_cupom: parseFloat(valorCupom),
            email: email
        };

        const recebe = {
            documento: arquivo ? arquivo.name : 'Documento de Exemplo',
            email: email,
            nome_ong: ongBeneficiada
        };

        try {
            // Enviar cupom
            const cupomResponse = await fetch('https://localhost:7149/api/Add_Cupom', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cupom)
            });

            if (!cupomResponse.ok) {
                throw new Error('Erro ao adicionar cupom: ' + cupomResponse.statusText);
            }

            // Enviar recebe
            const recebeResponse = await fetch('https://localhost:7149/api/Recebe/AdicionarRecebe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recebe)
            });

            if (!recebeResponse.ok) {
                throw new Error('Erro ao adicionar recebe: ' + recebeResponse.statusText);
            }

            alert('Cupom e Recebe adicionados com sucesso!');
        } catch (error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao adicionar os dados: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormularioContainer>
            <Texto>
                <a>Doação de Cupom Fiscal</a>
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
                    <div className="form-text" id="basic-addon4">Informe o e-mail cadastrado.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">ONG Beneficiada</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={ongBeneficiada}
                        onChange={(e) => setOngBeneficiada(e.target.value)}
                        required
                    >
                        <option value="">Selecione uma opção</option>
                        <option value="ASSOCIAÇÃO DE ASSISTÊNCIA À CRIANÇA DEFICIENTE">
                            ASSOCIAÇÃO DE ASSISTÊNCIA À CRIANÇA DEFICIENTE
                        </option>
                        {/* Adicione mais opções conforme necessário */}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Valor do Cupom Fiscal</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">R$</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Amount (to the nearest real)"
                            value={valorCupom}
                            onChange={(e) => setValorCupom(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Escolha um arquivo</label>
                    <div className="input-group">
                        <input
                            type="file"
                            className="form-control"
                            id="inputGroupFile04"
                            aria-describedby="inputGroupFileAddon04"
                            aria-label="Upload"
                            onChange={(e) => setArquivo(e.target.files[0])}
                        />
                        <button
                            className="btn btn-outline-danger"
                            type="submit"
                            id="inputGroupFileAddon04"
                            disabled={loading}
                        >
                            {loading ? 'Enviando...' : 'Enviar'}
                        </button>
                    </div>
                    <div className="form-text" id="basic-addon4">Realize o envio somente de arquivos em .JPG ou .PNG.</div>
                </div>
            </form>
        </FormularioContainer>
    );
}

export default FormularioCupom;
