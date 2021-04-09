const { logicaGetUsuario, logicaPostUsuario } = require('../LogicaNegocio/usuario.logic')

const usuario = async( req, res) => {
  try {
    const response = await logicaGetUsuario(req, res)
    return res.status(response.code).json(response.data)
  } catch (error) {
    return res.status(400).send({error})
  }
}

const crearUsuario = async( req, res) => {
  try {
    const usuarioCreado = await logicaPostUsuario(req, res)
    return res.status(usuarioCreado.code).send(usuarioCreado.data)
  } catch (error) {
    return res.status(400).send({error})
  }
}

module.exports = { usuario, crearUsuario };