const { dataBancos } = require('../AccesoDatos/banco.data')

const logicaGetBancos = async ( req, res ) => {
  try {
    const banksData = await dataBancos(req, res);
    return {
      code: 200,
      data: banksData.banks
    }
  } catch (error) {
    console.log('usuario.module / logicaGetUsuario ---> ', error)
    throw error;
  }
}

module.exports = { logicaGetBancos };
