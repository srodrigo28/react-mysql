import { db } from '../db.js';

export const getProdutos = (_, res) => {
    const q = "SELECT * FROM produtos";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const getProdutosOne = (req, res) => {
    const q = "SELECT * FROM produtos WHERE id = ?";

    db.query(q, [req.params.id], (err, data) => {
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

        return res.status(201).json("Inserido com sucesso:  " +  values[0]);
    });
};

export const deleteProduto = (req, res) => {
    const q = "DELETE FROM produtos WHERE id = ?";

        db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);
    
        return res.status(200).json("Excluido com sucesso. ");
    });
    
};

export const updateProduto = (req, res) => {
    const q = "UPDATE produtos SET nome = ?, SET quantidade = ?, SET valor = ?, WHERE id = ?";

    const values = [
        req.body.nome,
        req.body.quantidade,
        req.body.valor
    ];

    db.query(q, [...values, req.params.id], (error) => {
        if (error) return res.json(error);

        return res.status(202).json("Alterado com sucesso: " + values[1]);
    })
}