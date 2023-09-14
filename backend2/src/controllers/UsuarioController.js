import { db } from '../db.js';

export const getUsuarios = (_, res) => {
    const select_query = "SELECT * FROM usuario";

    db.query(select_query, (error, data) => {
        if (error) return res.json(error);

        return res.status(200).json(data)
    });
};