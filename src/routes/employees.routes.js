import {Router} from "express"; //import Router desde express. Extraemos funcion Router con sintaxis desestructuracion
import {getEmployees, createEmployee, updateEmployee,
deleteEmployee, getEmployee} from "../controllers/employees.controller.js"; //import de las promesas que realizaran la logica
//de los metodos http empleados


const router = Router(); //llamada a funcion Router() para crear un router (enrutador)

router.get("/employees", getEmployees); //indicamos a router que utilice metodo http get(). 1er arg ruta /employees - 2do arg promesa getEmployees
router.get("/employees/:id", getEmployee); //indicamos a router que utilice metodo http get(). 1er arg ruta /employees/:id(parametro ruta) - 2do arg promesa getEmployee
router.post("/employees", createEmployee); //indicamos a router que utilice metodo http post(). 1er arg ruta /employees - 2do arg promesa createEmployee
router.patch("/employees/:id", updateEmployee); //indicamos a router que utilice metodo http patch(). 1er arg ruta /employees/:id(parametro ruta) - 2do arg promesa updateEmployee
router.delete("/employees/:id", deleteEmployee); //indicamos a router que utilice metodo http delete(). 1er arg ruta /employees/:id(parametro ruta) - 2do arg promesa deleteEmployee

export default router //exportamos router