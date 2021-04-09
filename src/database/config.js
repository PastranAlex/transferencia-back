const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log('base de datos conectada')
  } catch (error) {
    console.log(error)
    throw new Error ('Error al conectar la base de datos')
  }
}

module.exports = { dbConnection };