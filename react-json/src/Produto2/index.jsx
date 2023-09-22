import { useEffect, useState } from "react"
import axios from "axios"

export function Produto2(){
    const url = "http://localhost:8080/produto";
    
    const [produtos, setProdutos] = useState([]);

    const [nome, setNome] = useState("default");
    const [qtd, setqtd] = useState(0);
    const [valor, setValor] = useState(0);
    const [total, setTotal] = useState(0);

    const cadastrar = (e) => {
        e.preventDefault();
        if( nome == "" || qtd == "" || valor == ""){
            alert("Por favor todos os campos são obrigatórios!")
        }else{
            setTotal(Number(qtd * valor));
            
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
    }

    
    // const cadastro = () => {
    //     return {
    //         setNome(nome),
    //         setQtd(qtd),
    //         setValor(valor),
    //     }
    // }

    /**  Formatando por função  */
    const formatar = (valor_form) => {
        return(
            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(valor_form)
        );
    }

    /** Listar */
    useEffect( () => {
        axios.get(url)
        .then(res => {
            setProdutos(res.data)
        })
        .catch(error => {
            console.log("Error: " + error);
        })
    }, [])
    
    /** Views */
    return(
        <div className="container">
            <h2 className="mt-5">Produto 2</h2>

            <form onSubmit={cadastrar}>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="nome produto" onChange={ e => setNome(e.target.value)} />
                        <input type="text" className="form-control" placeholder="qtd" onChange={ e => setqtd(e.target.value)} />
                        <input type="text" className="form-control" placeholder="valor" onChange={ e => setValor(e.target.value)} />
                        
                        <button className="btn btn-outline-success btn1">Cadastrar</button>
                        <button type="reset" className="btn btn-danger btn1">Limpar</button>
                    </div>
            </form>
            
            <table className="mt-3 table">
                
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>QTD</th>
                        <th>Total</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { produtos.map((item, i) => (
                        <tr>
                        <td className="col-6 ">{item.nome}</td>
                        <td className="col-2 ">{ formatar(item.valor) }</td>
                        <td className="col-2 ">{item.qtd}</td>
                        <td className="col-2 ">{ formatar(item.valor * item.qtd)}</td>
                        <td className="gap-space">
                            <button className="btn btn-outline-danger"> 
                                <i className="fa fa-trash"></i>
                            </button>
                            <button className="btn btn-outline-warning"> 
                                <i className="fa fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>

            </table>
            

        </div>
    )
}
