const donadores = [
    {
        id: 1,
        rfc: "123ALEX",
        nombre: "Alejandro Perez",
        proyectosAsociados: [3],
        imagen: "alexP.png" ,
        cantidadDonada: 20
    },
    {
        id: 2,
        rfc: "123SEBAS",
        nombre: "Sebastian Canez",
        proyectosAsociados: [1,2,3],
        imagen: "sebas.png" ,
        cantidadDonada: 20000
    },
    {
        id: 3,
        rfc: "123JONA",
        nombre: "Jonathan Montes",
        proyectosAsociados: [1],
        imagen: "jona.png" ,
        cantidadDonada: 3990
    }
]

const todos = function(){
    return donadores;
}
const buscarID = function(id){
    let p = donadores.find(e => e.id == id);
    return p;
}

const agregar = function(p){
    donadores.push({id: p.id, rfc: p.rfc, nombre: p.nombre, proyectosAsociados: p.proyectosAsociados, imagen: p.imagen, cantidadDonada: p.cantidadDonada})
    return donadores //push a la lista de los donadores
}
const borrar = function(id){
    let p = donadores.findIndex(e => e.id == id); //busca el donador
    if(p >-1) donadores.splice(p, 1)  //borra el elemento index de los donadores 
    return donadores
}

const actualizar=function(id,cambios){
    let p= buscarID(id)
    let nuevo= {...p,...cambios}
    borrar(id)
    donadores.splice(id-1,0,nuevo)
    return donadores
}

const proyectosDonador=function(id){
    return buscarID(id).proyectosAsociados
}

exports.todos = todos;
exports.buscarID = buscarID;
exports.agregar = agregar;
exports.borrar = borrar;
exports.actualizar = actualizar;
exports.proyectosDonador = proyectosDonador;