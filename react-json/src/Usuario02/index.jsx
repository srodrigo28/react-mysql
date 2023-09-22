import { useState } from "react"

export function Usuario02(){

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();

    const cadastrar = (e) => {
        e.preventDefault();
        if(nome == "" || email == ""){
            alert("Por favor todos os campos são obrigatórios!")
        }else{
            console.log("Nome: " + nome, " Email: " + email);
        }
    }
    return(
        <div>
            <h2>Usuario02</h2>

            <form onSubmit={cadastrar}>
                <input type="text" onChange={ e => setNome(e.target.value)} />
                <input type="text" onChange={ e => setEmail(e.target.value)} />
                <button>Cadastrar</button>
            </form>
        </div>
    )
}