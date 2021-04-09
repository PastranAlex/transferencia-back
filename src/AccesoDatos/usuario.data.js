const Usuario = require('../Models/usuario')

const dataUsuario = async ( req, res ) => {
  try {
    const usuarios = await Usuario.find();
    return usuarios
  } catch (error) {
    console.log('usuario.service / dataUsuario ---> ', error)
    throw error; 
  }
}

const createUsuario = async ( req, res ) => {
  try {
    const body = req.body;
    const usuario = new Usuario(body);
    await usuario.save();
    return usuario
  } catch (error) {
    console.log('usuario.service / createUsuario ---> ', error)
    throw error; 
  }
}



module.exports = { dataUsuario, createUsuario };