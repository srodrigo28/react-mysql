import styled from "styled-components"
import { useEffect, useRef } from "react";

const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input`
    width: 220px;
    padding: 0 10px;
    border: 1px solid #bbb;
    height: 40px;
`;

const Button = styled.button`
    cursor: pointer;
    margin-top: 20px;
    width: 100px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;


const Form = ( { onEdit } ) => {
    const ref = useRef();

    useEffect( () => {
        if(onEdit) {
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if(
            !user.nome.value ||
            !user.email.value
        ){
            return alert("Preencher todos os campos!");
        }

        if(onEdit){
            await axios
            .put("http://localhost:8800/users/" + onEdit.id, {
                nome: user.nome.value,
                email: user.email.value
            })
            .then(( {data }) => alert(data))
            .catch(( {data }) => console.log(data));
        }
    }

    return(
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email" />
            </InputArea>
            <Button type="submit">Salvar</Button>
        </FormContainer>
    )
}

export default Form;