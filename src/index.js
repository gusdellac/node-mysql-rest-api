// const express = require("express"); //modulos de common js de node
import express from "express"; //modulos ES modules de node, codigo moderno
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json()); //metodo express.json() convierte la info recibida en formato JSON a un objeto de javascript para que este
//pueda interpretarlo y utilizarlo. De esta forma indicamos a app que traduzca la info antes de pasarlas a las rutas

//instalamos nodemon como dependecia de desarrollo (npm i nodemon -D), ejecutamos con npm run dev

app.use(indexRoutes);
app.use("/api",employeesRoutes);

app.listen(3000);


