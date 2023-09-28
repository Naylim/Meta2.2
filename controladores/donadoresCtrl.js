const donadores = require("../modelos/donadoresMdl");
const proyectos = require("../modelos/proyectoMdl");

const ObtenerTodos = async function (req,res){
    let p = donadores.todos();
    await res.json(p);
}

const ObtenerPorID = async function(req, res) {
    await res.json(donadores.buscarID(req.params.id))
}

const agregarDonador = async function(req, res){
    const {id, rfc, nombre, proyectosAsociados, imagen, cantidadDonada} = req.body; 
    //requerimientos en el body
    if(id && rfc && nombre && proyectosAsociados && imagen && cantidadDonada){
        let newDon={id: id, rfc: rfc, nombre: nombre, proyectosAsociados: proyectosAsociados, imagen: imagen, cantidadDonada: cantidadDonada};
        res.json(donadores.agregar(newDon))
    }
    else {
        return
    }
}

const borrarDonador = async function(req, res){
    await res.json(donadores.borrar(req.params.id))
}

const actualizarDonador= async function(req,res){
    await res.json(donadores.actualizar(req.params.id,req.body))
}

const obtenerProyectos= async function(req,res){
    let ps=donadores.proyectosDonador(req.params.id)
    let lista=[]
    ps.forEach(x => {
        lista.push(proyectos.buscarID(x))
    });
    await res.json(lista)
}

exports.ObtenerTodos = ObtenerTodos;
exports.ObtenerPorID = ObtenerPorID;
exports.agregarDonador = agregarDonador;
exports.borrarDonador = borrarDonador;
exports.actualizarDonador = actualizarDonador;
exports.obtenerProyectos = obtenerProyectos;