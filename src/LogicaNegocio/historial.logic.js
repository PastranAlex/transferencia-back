const { dataHistorial, createHistorial } = require('../AccesoDatos/historial.data')

const logicaGetHistorial = async ( req, res ) => {
  try {
    const historialData = await dataHistorial(req, res);

    const historialFiltered = historialData.map( historial => {
      const { nombreDestinatario, rutDestinatario, bancoDestinatario, tipoCuentaDestinatario, monto } = historial
      return { nombreDestinatario, rutDestinatario, bancoDestinatario, tipoCuentaDestinatario, monto }
    })

    return {
      code: 200,
      data: historialFiltered
    }
  } catch (error) {
    console.log('historial.module / logicaGetHistorial ---> ', error)
    throw error;
  }
}

const logicaPostHistorial = async ( req, res ) => {
  try {

    const historialData = await createHistorial(req, res);
    return {
      code: 200,
      data: historialData
    }
  } catch (error) {
    console.log('historial.module / logicaPostHistorial ---> ', error)
    throw error;
  }
}

module.exports = { logicaGetHistorial, logicaPostHistorial };
