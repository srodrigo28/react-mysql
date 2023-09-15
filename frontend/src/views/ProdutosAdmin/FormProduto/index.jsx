import axios from "axios";
import { useRef } from "react";

export function FormProduto() {
    const ref = useRef();
    const url = "http://localhost:8800/produtos";

    const aoSubmeterForm = (evento) => {
        const produto = ref.current;

        evento.preventDefault();
        // alert('Hello cadastro')
        // console.log(produto.nome.value, produto.qtd.value, produto.valor.value);

        axios.post(url, {
            nome: produto.nome.value,
            quantidade: produto.qtd.value,
            valor: produto.valor.value
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
            <form ref={ref} onSubmit={aoSubmeterForm}>
                <input type="text" name="nome" placeholder="nome" />
                <input type="text" name="qtd" placeholder="quantidade" />
                <input type="text" name="valor" placeholder="valor" />
                <button>Salvar</button>
            </form>
        </div>
    )
}