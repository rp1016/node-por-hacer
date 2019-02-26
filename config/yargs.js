let crearOptions = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    }
};

let actualizarOptions = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
};

let borrarOptions = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea a borrar'
    }
};


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer.', crearOptions)
    .command('actualizar', 'Actualiza el estado completado de una tarea.', actualizarOptions)
    .command('borrar', 'Borra una tarea existente.', borrarOptions)
    .help()
    .argv;


module.exports = { argv };