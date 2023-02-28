import {Router} from "express";

const router = Router();

router.get("/employes", (req, res) => res.send("obteniendo empleados"));
router.post("/employes", (req, res) => res.send("agregando empleados"));
router.put("/employes", (req, res) => res.send("actualizando empleados"));
router.delete("/employes", (req, res) => res.send("eliminando empleados"));

export default router