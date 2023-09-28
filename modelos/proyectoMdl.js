const donatarioDelProyecto = require("../modelos/donatariosMdl");
const donadoresDelProyecto = require("../modelos/donadoresMdl");
//exporta los modelos de los donadores y de donatarios

//Cada Proyecto puede tener solo un Donatario y uno o más Donadores
const proyectos = [
    {
        id: 1,
        nombre: "Proyecto 1",
        descripcion: "Servicio REST",
        imagen: "proy1.png",
        donatario: 1,
        donadores: [2, 3],
        cantidadDonada: 1000
    },
    {
        id: 2,
        nombre: "Proyecto 2",
        descripcion: "Proyecto bonito",
        imagen: "proy2.png",
        donatario: 3,
        donadores: [2],
        cantidadDonada: 23400
    }, 
    {
        id: 3,
        nombre: "Proyecto 3",
        descripcion: "Proyecto feo",
        imagen: "proy3.png",
        donatario: 1,
        donadores: [1,2],
        cantidadDonada: 30
    }
]
const todos = function(){
    return proyectos;
}

const buscarID = function(id){
    let p = proyectos.find(e => e.id == id);
    return p;
}

const agregar = function(p){
    proyectos.push({id: p.id, nombre: p.nombre, descripcion: p.descripcion, imagen: p.imagen, donatario: p.donatario, donadores: p.donadores, cantidadDonada: p.cantidadDonada})
    return proyectos //push a la lista de los proyectos
}

const borrar = function(id){
    let p = proyectos.findIndex(e => e.id == id); //busca el proyecto
    if(p >-1) proyectos.splice(p, 1)  //borra el elemento index del proyecto 
    return proyectos
}

const actualizar=function(id,cambios){
    let p= buscarID(id)
    let nuevo= {...p,...cambios}
    //console.log(nuevo)
    borrar(id) //borra el anterior y lo remplaza por uno nuevo
    proyectos.splice(id-1,0,nuevo)
    return proyectos
}

const consultaDonatario=function(id){
    let p=buscarID(id).donatario
    return donatarioDelProyecto.buscarID(p)
}

const consultaDonadores=function(id){
    let lista=[]
    let p=buscarID(id).donadores

    p.forEach(x => {
        lista.push(donadoresDelProyecto.buscarID(x))
    });
    return lista //lista de donadores
}

exports.todos = todos;
exports.buscarID = buscarID;
exports.agregar = agregar;
exports.borrar = borrar;
exports.actualizar = actualizar;
exports.consultaDonatario = consultaDonatario;
exports.consultaDonadores = consultaDonadores;