import { Router } from "express"; //import Router desde express. Extraemos funcion Router con sintaxis desestructuracion
import {ping} from "../controllers/index.controller.js"; //import ping desde index.controller.js . Extraemos const ping con sintaxis desestructuracion

const router = Router(); //llamada a funcion Router() para crear un router (enrutador)

router.get("/ping", ping); //indicamos a router que utilice metodo http get(), indicamos la ruta /ping como primer arg y como segundo
//arg la promesa ping

export default router //exportamos const router