const cors = require("cors");
const express = require("express");

const proyectosRT = require("./Rutas/proyectosRuta");
const donatariosRT = require("./Rutas/donatariosRuta");
const donadoresRT = require("./Rutas/donadoresRuta");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/proyectos", proyectosRT);
app.use("/donatarios", donatariosRT);
app.use("/donadores", donadoresRT);

app.listen(3000, ()=> {
    console.log("Server en puerto 3000");
});