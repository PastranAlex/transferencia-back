const { usuario, crearUsuario } = require('../Respuesta/usuario.response');
const { historial, crearRegistro } = require('../Respuesta/historial.response');
const { bancos } = require('../Respuesta/banco.response');

const routes = app => {
  app.get('/usuario', usuario);
  app.post('/usuario', crearUsuario);
  app.get('/bancos', bancos);
  app.get('/historial', historial);
  app.post('/historial', crearRegistro);
}

module.exports = { routes };