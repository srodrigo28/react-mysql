import { useState } from "react"

export function Usuario(){

    const [data, setData] = useState({
        nome: '',
        email: ''
    });

    const valueInput = (e) => setData({ ...data, [e.target.name]: e.target.value});

    const addUser = (e) => {
        e.preventDefault(); // bloqueia o comportamento padrão

        console.log("Enviar para API");

        console.log("Nome do usuário: " + data.nome);
        console.log("Nome do usuário: " + data.email);
    }

    return(
        <div>
             <h2>Cadastrar usuário</h2>
            <form onSubmit={addUser}>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="nome" onChange={valueInput} value={data.nome} />

                <label htmlFor="email">E-mail:</label>
                <input type="text" name="email" onChange={valueInput} value={data.email} />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}