import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

const Table = styled.table`
    width: 100%;
    max-width: 800px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`

    @media(max-width: 500px){
        ${ ( props ) => props.onlyWeb && "display: none" }
    }
`;

export const Tbody = styled.tbody`
    
    /* display: block;
    
    width: 100%;
    height: 250px;
    overflow-y: auto; */
    
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${( props => ( props.alignCenter ? "center" : "start")) };
    width: ${( props => ( props.width ? props.width : "auto")) };

    @media (max-width: 500px){
        ${( props ) => props.onlyWeb && "display: none"}
    }

    
`;

const Grid = ({ users }) => {

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/users/" + id)
            // .delete(`http://localhost:8800/users/${id}`)
            .then(( {data}) => {
                const newArray = users.filter((user) => user.id !== id);

                setUsers(newArray);
                console.log(data);
            })
            .catch( ({ data }) => console.log(data));

            // setOnEdit(null);
    }

    console.log("grid console: " + users.data);
    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                </Tr>
            </Thead>
            <Tbody>
                { users.map((item, i) => (
                    <Tr key={i}>
                        <Td >{item.nome}</Td>
                        <Td >{item.email}</Td>
                        <Td className="buttons">
                            <FaEdit />
                            <FaTrash onClick={ ()=> handleDelete(item.id) } />
                        </Td>
                    </Tr>
                    ))
                }
            </Tbody>
        </Table>
    );
};

export default Grid;