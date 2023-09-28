const proyecto = require("../modelos/proyectoMdl");

const ObtenerTodos = async function (req,res){
    let p = proyecto.todos();
    await res.json(p);
}

const ObtenerPorID = async function(req, res) {
    await res.json(proyecto.buscarID(req.params.id))
}

const agregarProyecto = async function(req, res){
    const {id,nombre, descripcion, imagen, donatario, donadores, cantidadDonada} = req.body; 
    //requerimientos en el body
    if(id && nombre && descripcion && imagen && donatario && donadores && cantidadDonada){
        let newPro={id: id, nombre: nombre, descripcion: descripcion, imagen: imagen, donatario: donatario, donadores: donadores, cantidadDonada: cantidadDonada};
        res.json(proyecto.agregar(newPro))
    }
    else {
        return
    }
}

const borrarProyecto = async function(req, res){
    await res.json(proyecto.borrar(req.params.id))
}

const actualizarProyecto= async function(req,res){
    await res.json(proyecto.actualizar(req.params.id,req.body))
}

const obtenerDonatario=async function(req,res){
    await res.json(proyecto.consultaDonatario(req.params.id))
}
const obtenerDonador=async function(req,res){
    await res.json(proyecto.consultaDonadores(req.params.id))
}

exports.ObtenerTodos = ObtenerTodos;
exports.ObtenerPorID = ObtenerPorID;
exports.agregarProyecto = agregarProyecto;
exports.borrarProyecto = borrarProyecto;
exports.actualizarProyecto = actualizarProyecto;
exports.obtenerDonador = obtenerDonador;
exports.obtenerDonatario = obtenerDonatario;