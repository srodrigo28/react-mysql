import styled from "styled-components";
import { FaEdit } from "react-icons/fa";


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media(max-width: 500px){
        ${ ( props ) => props.onlyWeb && "display: none" }
    }
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${( props => ( props.alignCenter ? "center" : "start")) };
    width: ${( props => ( props.width ? props.width : "auto")) };

    @media (max-width: 500px){
        ${( props ) => props.onlyWeb && "display: none"}
    }
`;

const Grid = ({ users }) => {
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
                        <Td >
                            <FaEdit />
                        </Td>
                        {/* <Td >
                            <FaTrash  />
                        </Td> */}
                    </Tr>
                    ))
                }
            </Tbody>
        </Table>
    );
};

export default Grid;