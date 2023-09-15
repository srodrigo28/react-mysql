import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const url = "http://localhost:8800/produtos";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setProdutos(res.data)
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    }, [produtos])

    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <td>Valor</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {   produtos.map((item, i) => (
                            <tr key={i} className="overflow-y-auto">
                                <td >{item.nome}</td>
                                <td >{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td>
                                <Link
                                    to={`http://localhost:5173/admin/${item.id}`}
                                    className="btn btn-outline-warning"
                                >Editar</Link>
                                    <button className="btn btn-outline-danger">Apagar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}