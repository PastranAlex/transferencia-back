const { Schema, model } = require('mongoose');

const HistorialSchema = Schema({
  nombreDestinatario: {
    type: String,
    required: [ true, 'El nombre es obligatorio']
  },
  rutDestinatario: {
    type: String,
    required: [ true, 'El RUT es obligatorio'],
  },
  bancoDestinatario: {
    type: String,
    required: [ true, 'El banco es obligatorio']
  }, 
  tipoCuentaDestinatario: {
    type: String,
    required: [ true, 'El tipo de cuenta es obligatorio']
  },
  monto: {
    type: Number,
    required: [ true, 'El tipo de monto es obligatorio']
  }
})

module.exports = model('Historial', HistorialSchema);
