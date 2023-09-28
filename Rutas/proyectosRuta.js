const express = require("express");
const router = express.Router();
const controler = require("../controladores/proyectoCtrl");

router.get("/", controler.ObtenerTodos);
router.get("/:id", controler.ObtenerPorID);
router.post("/", controler.agregarProyecto);
router.delete("/:id", controler.borrarProyecto);
router.patch("/:id",controler.actualizarProyecto);
router.get("/:id/donadores",controler.obtenerDonador);
router.get("/:id/donatarios",controler.obtenerDonatario);

module.exports = router;