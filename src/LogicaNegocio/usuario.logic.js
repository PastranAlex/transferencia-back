const { dataUsuario, createUsuario } = require('../AccesoDatos/usuario.data')

const logicaGetUsuario = async ( req, res ) => {
  try {
    const usersData = await dataUsuario(req, res);

    const userFiltered = usersData.map( user => {
      const { nombre, rut, banco, tipoCuenta, numeroCuenta, correo } = user
      return { nombre, rut, banco, tipoCuenta, numeroCuenta, correo }
    })

    return {
      code: 200,
      data: userFiltered
    }
  } catch (error) {
    console.log('usuario.module / logicaGetUsuario ---> ', error)
    throw error;
  }
}

const logicaPostUsuario = async ( req, res ) => {
  try {

    const userData = await createUsuario(req, res);
    return {
      code: 200,
      data: userData
    }
  } catch (error) {
    console.log('usuario.module / logicaPostUsuario ---> ', error)
    throw error;
  }
}

module.exports = { logicaGetUsuario, logicaPostUsuario };
