const axios = require('axios');

const dataBancos = async ( req, res ) => {
  try {
    const payload = await axios.get('https://bast.dev/api/banks.php');

    return payload.data
  } catch (error) {
    console.log('usuario.service / dataUsuario ---> ', error)
    throw error; 
  }
}

module.exports = { dataBancos };