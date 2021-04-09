const { logicaGetHistorial, logicaPostHistorial } = require('../LogicaNegocio/historial.logic')

const historial = async( req, res) => {
  try {
    const response = await logicaGetHistorial(req, res)
    return res.status(response.code).json(response.data)
  } catch (error) {
    return res.status(400).send({error})
  }
}

const crearRegistro = async( req, res) => {
  try {
    const usuarioCreado = await logicaPostHistorial(req, res)
    return res.status(usuarioCreado.code).send(usuarioCreado.data)
  } catch (error) {
    return res.status(400).send({error})
  }
}

module.exports = { historial, crearRegistro };