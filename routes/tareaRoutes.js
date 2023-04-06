import express from "express";
const router = express.Router();

import {
  agregarTarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea,
  cambiarEstado,
} from "../controllers/tareaController.js";

import checkAuth from "../middleware/checkAuth.js";

router.post("/", checkAuth, agregarTarea);
router.get("/:id", checkAuth, obtenerTarea);
router.put("/:id", checkAuth, actualizarTarea);
router.delete("/:id", checkAuth, eliminarTarea);
router.post("/estado/:id", checkAuth, cambiarEstado);

export default router;
