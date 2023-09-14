import  GlobalStyles  from "./styles/global";
import styled from "styled-components";

import Form from "./components/Form";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const url = "http://localhost:8800/";

  const getUsers = async () => {
    try{
      const res = await axios.get(url);
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1) ));
    } catch(error){
      console.log(error);
    }
  };

    useEffect( () => {
      getUsers();
    }, [setUsers]);

  return (
    <>
    <Container>
        <Title>Usuários</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid users={users} setUsers={setUsers}  setOnEdit={setOnEdit} />
    </Container>
    
      <GlobalStyles />
    </>
  );
}

export default App
