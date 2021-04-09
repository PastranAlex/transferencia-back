const { logicaGetBancos } = require('../LogicaNegocio/banco.logic')

const bancos = async( req, res) => {
  try {
    const response = await logicaGetBancos(req, res)
    return res.status(response.code).json(response.data)
  } catch (error) {
    return res.status(400).send({error})
  }
}

module.exports = { bancos };