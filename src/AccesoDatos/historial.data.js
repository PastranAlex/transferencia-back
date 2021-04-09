const Historial = require('../Models/historial')

const dataHistorial = async ( req, res ) => {
  try {
    const { limite = 15, offset = 0 } = req.query;
    const historial = await Historial.find().skip(Number(offset)).limit(Number(limite));
    return historial
  } catch (error) {
    console.log('historial.service / dataHistorial ---> ', error)
    throw error; 
  }
}

const createHistorial = async ( req, res ) => {
  try {
    const body = req.body;
    const historial = new Historial(body);
    await historial.save();
    return historial
  } catch (error) {
    console.log('historial.service / createHistorial ---> ', error)
    throw error; 
  }
}



module.exports = { dataHistorial, createHistorial };