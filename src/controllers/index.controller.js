import {pool} from "../db.js"; //importamos pool de modulo db.js

//promise que realizara una query a la db (SELECT "Pong" alias result), la almacenamos en const ping y la exportamos
export const ping = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT "Pong" AS result'); //extraemos el objeto del primer indice de la matriz y lo almacenamos en variable result
        res.json(result); //enviamos result como respuesta
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};