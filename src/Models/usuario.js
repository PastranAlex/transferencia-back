const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [ true, 'El nombre es obligatorio']
  },
  rut: {
    type: String,
    required: [ true, 'El RUT es obligatorio'],
    unique: true
  },
  correo: {
    type: String,
  },
  telefono: {
    type: String,
  },
  banco: {
    type: String,
    required: [ true, 'El banco es obligatorio']
  }, 
  tipoCuenta: {
    type: String,
    enum: ['Cuenta Corriente', 'Cuenta Vista'],
    required: [ true, 'El tipo de cuenta es obligatorio']
  },
  numeroCuenta: {
    type: String,
    required: [ true, 'El tipo de numeroCuenta es obligatorio']
  },

})

module.exports = model('Usuario', UsuarioSchema);
