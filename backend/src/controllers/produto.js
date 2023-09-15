import { db } from '../db.js';

export const getProdutos = (_, res) => {
    const q = "SELECT * FROM produtos";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addProduto = (req, res) => {
    const q = "INSERT INTO produtos(nome, quantidade, valor) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.quantidade,
        req.body.valor
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(201).json("Inserido com sucesso");
    });
};