import {createPool} from "mysql2/promise"; //importamos funcion createPool() de modulo mysql2. Directorio mysql2, modulo promise.js
//extraemos funcion createPool() con sintaxis de desestructuracion

//import las const en las que almacenamos nuestras var de entorno desde el modulo config.js
import {
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    DB_PORT
} from "./config.js";

//creamos la conexion con la base de datos usando funcion createPool(), pasando como argumento un objeto con los datos de la db
//exportamos la conexion creada y almacenada en la const pool
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});

