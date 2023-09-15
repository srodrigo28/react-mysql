import axios from "axios";
import { useEffect, useState } from "react"

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
                    </tr>
                </thead>
                <tbody>
                    {   produtos.map((item, i) => (
                            <tr key={i} className="overflow-y-auto">
                                <td >{item.nome}</td>
                                <td >{item.quantidade}</td>
                                <td>{item.valor}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}