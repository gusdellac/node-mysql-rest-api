import {pool} from "../db.js"; //importamos pool de modulo db.js

//promise que realizara una query a la db para obtener todos los empleados 
export const getEmployees = async (req, res) => {
    try {
        // throw new Error("DB error");
        const [rows] = await pool.query('SELECT * FROM employee'); //desestructura la matriz retornada por la query y trae el array de objetos almacenados
        //en el primer indice
        res.json(rows); //enviamos rows como respuesta   
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};

//promise que realizara una query a la db para obtener un empleado en especifico 
export const getEmployee = async (req, res) => {
    try {
        const id = req.params.id; //extraemos id del parametro de url solicitado por el cl
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]); //query que seleccionara todos los empleados donde el id sea igual al id
        //solicitado en la req, como los id en nuestra db son unicos solo traera el empleado que coincida con el id.
        //Almacena el resultado de la query en const rows. Con la sintaxis [rows] ingresara al primer indice de la matriz retornada por la query y almacenara el objeto que se encuentra en este
        //indice si existiere, sino solo almacenara un array vacio

        // comprobamos si array rows tiene longitud. Si no tiene longitud significa que el empleado no fue encontrado y el retorno de la query en el primer indice fue un
        // array vacio
        if (rows.length <= 0) return res.status(404).json({ message: "Employee not found"});
        res.json(rows[0]); //si se encuentra el empleado lo enviamos como respuesta al cl. Ver que indicamos a array rows su posicion [0] para que envie
        //el objeto guardado en esa posicion y no todo el array
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};

//promise que realizara una query a la db para crear un empleado
export const createEmployee = async (req, res) => {
    const {name, salary} = req.body; //destructuramos el cuerpo de la solicitud y extraemos name y salary
    try {
        const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES (?, ?)', [name, salary]);
        // res.status(201).json({ message: "Employee created"});
        res.status(201).send({
            id: rows.insertId,
            name,
            salary,
            message: "Employee created"    
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};

//const [rows] --> sintaxis desestructuracion de un array. Del array que nos devuelve la query solo queremos el primer indice que contiene o no un objeto

//promise que realizara una query a la db para eliminar un empleado
export const deleteEmployee = async (req, res) => {
    const id = req.params.id;
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id]);
        console.log(result);
        if (result.affectedRows <= 0) return res.status(404).json({message: "Employee not found"});
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};

//promise que realizara una query a la db para modificar un empleado
export const updateEmployee = async (req, res) => {
    const {id} = req.params;
    const {name, salary} = req.body;

    try {
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
        if (result.affectedRows === 0) return res.status(404).json({
            message: "Employee not found"
        });
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        });
    }
};



