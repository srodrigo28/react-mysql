import styled from "styled-components"
import { useRef } from "react";

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

    return(
        <FormContainer ref={ref}>
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