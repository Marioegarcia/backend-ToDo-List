// const Role = require('../models/role');
const { Task } = require('../models');

const existeTaskPorId = async( id ) => {

    // Verificar si el id existe
    const existeTask = await Task.findById(id);
    if ( !existeTask ) {
        throw new Error(`El id de la tarea no existe ${ id }`);
    }
}

// const esRoleValido = async(rol = '') => {

//     const existeRol = await Role.findOne({ rol });
//     if ( !existeRol ) {
//         throw new Error(`El rol ${ rol } no está registrado en la BD`);
//     }
// }

// const emailExiste = async( correo = '' ) => {

//     // Verificar si el correo existe
//     const existeEmail = await Usuario.findOne({ correo });
//     if ( existeEmail ) {
//         throw new Error(`El correo: ${ correo }, ya está registrado`);
//     }
// }



/**
 * Categorias
 */
// const existeCategoriaPorId = async( id ) => {

//     // Verificar si el correo existe
//     const existeCategoria = await Categoria.findById(id);
//     if ( !existeCategoria ) {
//         throw new Error(`El id no existe ${ id }`);
//     }
// }

/**
 * Productos
 */
// const existeProductoPorId = async( id ) => {

//     // Verificar si el correo existe
//     const existeProducto = await Producto.findById(id);
//     if ( !existeProducto ) {
//         throw new Error(`El id no existe ${ id }`);
//     }
// }


module.exports = {

    existeTaskPorId,

}