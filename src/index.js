// const express = require("express"); //modulos de common js de node
import express from "express"; //modulos ES modules de node, codigo moderno
import employeesRoutes from "./routes/employes.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

//instalamos nodemon como dependecia de desarrollo (npm i nodemon -D), ejecutamos con npm run dev

app.use(indexRoutes);
app.use(employeesRoutes);

app.listen(3000);


