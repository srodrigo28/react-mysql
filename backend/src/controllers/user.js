import { db } from '../db.js';

// Listar
export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

// Adicionar
export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios(nome, email) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(201).json("Inserido com sucesso:  " +  values[0]);
    });
};

// Atualizar
export const updateUser = (req, res) => {
    const q = "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?";

    const values = [
        req.body.nome,
        req.body.email
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Alterado com sucesso.");
    });
};

// Apagar
export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE id = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Excluido com sucesso. ");
    });
};
