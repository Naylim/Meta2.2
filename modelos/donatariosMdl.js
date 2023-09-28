const donatarios = [
    {
        id: 1,
        rfc: "123OSCAR",
        nombre: "Oscar Castaneda",
        proyectoAsociado: [1],
        imagen: "oscar.png" 
    },
    {
        id: 2,
        rfc: "123NAY",
        nombre: "Naylim Dorame",
        proyectoAsociado: [3],
        imagen: "naylim.png" 
    },
    {
        id: 3,
        rfc: "123CHANG",
        nombre: "Alex Chang",
        proyectoAsociado: [2],
        imagen: "alex.png" 
    }
]

const todos = function(){
    return donatarios;
}
const buscarID = function(id){
    let p = donatarios.find(e => e.id == id);
    return p;
}

const agregar = function(p){
    donatarios.push({id: p.id, rfc: p.rfc, nombre: p.nombre, proyectoAsociado: p.proyectoAsociado, imagen: p.imagen})
    return donatarios //push a la lista de los donatarios
}
const borrar = function(id){
    let p = donatarios.findIndex(e => e.id == id); //busca el donatario
    if(p >-1) donatarios.splice(p, 1)  //borra el elemento index de los donatarios 
    return donatarios
}

const actualizar=function(id,cambios){
    let p= buscarID(id)
    let nuevo= {...p,...cambios}
    borrar(id)
    donatarios.splice(id-1,0,nuevo)
    return donatarios
}

const proyectoDonatario=function(id){
    return buscarID(id).proyectoAsociado
}

exports.todos = todos;
exports.buscarID = buscarID;
exports.agregar = agregar;
exports.borrar = borrar;
exports.actualizar = actualizar;
exports.proyectoDonatario = proyectoDonatario;
