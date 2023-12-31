import axios from "axios";
import { useState } from "react";

export function FormProduto() {
    const url = "http://localhost:8800/produtos";

    const [nome, setNome] = useState('');
    const [qtd, setQtd] = useState('');
    const [valor, setValor] = useState('');

    const cadastro = () => {
        return {
            setNome(nome),
            setQtd(qtd),
            setValor(valor),
        }
    }

    const aoSubmeterForm = (evento) => {
        evento.preventDefault();
        axios.post(url, {
            cadastro
        })
        .then(() => {
            alert("Cadastrado com sucesso")
        })
        .catch(error => {
          console.log(error)
        })
    }

    return (
        <div className="container">
            <h1>Cadastro Novo Produto</h1>
            <form onSubmit={aoSubmeterForm}>
                <input
                    type="text"
                    placeholder="nome"
                    value={nome} onChange={e => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="quantidade"
                    value={qtd} onChange={ e => setQtd(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="valor"
                    value={valor} onChange={ e => setValor(e.target.value )}
                />
                <button>Salvar</button>
            </form>
        </div>
    )
}