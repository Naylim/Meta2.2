const express = require("express");
const router = express.Router();
const controler = require("../controladores/donadoresCtrl");

router.get("/", controler.ObtenerTodos);
router.get("/:id", controler.ObtenerPorID);
router.post("/", controler.agregarDonador);
router.delete("/:id", controler.borrarDonador);
router.patch("/:id",controler.actualizarDonador);
router.get("/:id/proyectos",controler.obtenerProyectos);

module.exports = router;