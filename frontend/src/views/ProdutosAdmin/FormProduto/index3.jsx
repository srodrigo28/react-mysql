import axios from "axios";
import { useEffect, useRef } from "react";
import { Produtos } from "../../Produtos";
import { useParams } from "react-router-dom";

export function FormProduto() {
    const ref = useRef();
    const param = useParams();
    const url = "http://localhost:8800/produtos";

    useEffect(() => {
        // const produto = ref.current;

        if (param.id) {
            axios.get(`${url}/${param.id}`)
                // .then(res => console.log(res.data)
                // .then(res => console.log(res.data[0]);
                .then(res => console.log(res.data[0].nome, res.data[0].quantidade, res.data[0].valor,))
            // console.log(`${url}/${param.id}`);
        }
    }, [param])
    
    const aoSubmeterForm = (evento) => {
        evento.preventDefault();
        const produto = ref.current;

        axios.post(url, {
            nome:       produto.name.value,
            valor:      produto.valor.value,
            quantidade: produto.qtd.value
        }).then(() => {
            alert("Cadastrado com sucesso")
        }).catch(error => {
          console.log(error)
        })
    }

    return (
        <div className="container">
            <h1>Cadastro Novo Produto</h1>
            <form ref={ref} onSubmit={aoSubmeterForm} className="mb-5 flex-nowrap">
                <div className="row input-group">
                    <input type="text" name="name"  placeholder="nome"       className="form-control"   />
                    <input type="text" name="qtd"   placeholder="quantidade" className="form-control"   />
                    <input type="text" name="valor" placeholder="valor"      className="form-control"   />
                    <button className="form-control col-2 btn btn-success mr-2">Salvar</button>
                </div>
            </form>

            
        </div>
    )
}