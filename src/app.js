// const express = require("express"); //modulos de common js de node
import express from "express"; //modulos ES modules de node, codigo moderno , para poder utilizar esta sintaxis es necesario
//tener una version de node superior a la 16. Import express de modulo express

import employeesRoutes from "./routes/employees.routes.js"; //import modulo employees.routes.js y guardamos en const employeesRoutes
import indexRoutes from "./routes/index.routes.js"; //import modulo index.routes.js y guardamos en const indexRoutes

const app = express(); //llamada a funcion express() para crear un app express

app.use(express.json()); //metodo express.json() convierte la info recibida en formato JSON a un objeto de javascript para que este
//pueda interpretarlo y utilizarlo. De esta forma indicamos a app que traduzca la info antes de pasarlas a las rutas

//instalamos nodemon como dependecia de desarrollo (npm i nodemon -D), ejecutamos con npm run dev

app.use(indexRoutes); //metodo use() de express para indicar a la app que utilice modulo indexRoutes
app.use("/api",employeesRoutes); //metodo use() de express para indicar a la app que utilice la ruta /api + modulo employeesRoutes

//sintaxis para enviar una respuesta especifica al cliente cuando intenta acceder a una ruta inexistente
app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint not found"
    });
});

export default app; //exportamos todo el modulo app