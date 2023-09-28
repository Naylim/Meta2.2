const express = require("express");
const router = express.Router();
const controler = require("../controladores/donatariosCtrl");

router.get("/", controler.ObtenerTodos);
router.get("/:id", controler.ObtenerPorID);
router.post("/", controler.agregarDonatario);
router.delete("/:id", controler.borrarDonatario);
router.patch("/:id",controler.actualizarDonatario);
router.get("/:id/proyecto",controler.obtenerProyecto);


module.exports = router;