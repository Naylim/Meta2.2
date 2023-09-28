const donatario = require("../modelos/donatariosMdl");
const proyectos = require("../modelos/proyectoMdl");

const ObtenerTodos = async function (req,res){
    let p = donatario.todos();
    await res.json(p);
}

const ObtenerPorID = async function(req, res) {
    await res.json(donatario.buscarID(req.params.id))
}

const agregarDonatario = async function(req, res){
    const {id, rfc, nombre, proyectoAsociado, imagen} = req.body; 
    //requerimientos en el body
    if(id && rfc && nombre && proyectoAsociado && imagen){
        let newDon={id: id, rfc: rfc, nombre: nombre, proyectoAsociado: proyectoAsociado, imagen: imagen};
        res.json(donatario.agregar(newDon))
    }
    else {
        return
    }
}

const borrarDonatario = async function(req, res){
    await res.json(donatario.borrar(req.params.id))
}

const actualizarDonatario= async function(req,res){
    await res.json(donatario.actualizar(req.params.id,req.body))
}

const obtenerProyecto= async function(req,res){
    let ps=donatario.proyectoDonatario(req.params.id)
    let lista=[]
    ps.forEach(x => {
    lista.push(proyectos.buscarID(x))
    });
    await res.json(lista)
}

exports.ObtenerTodos = ObtenerTodos;
exports.ObtenerPorID = ObtenerPorID;
exports.agregarDonatario = agregarDonatario;
exports.borrarDonatario = borrarDonatario;
exports.actualizarDonatario = actualizarDonatario;
exports.obtenerProyecto = obtenerProyecto;