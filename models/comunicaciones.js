const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comunicacionesSchema = new Schema({
  id_encuesta: String,
  internet: Number,
  celular: Number,
  habitaciones: Number,
  mas: String,
});

module.exports = mongoose.model('Comunicaciones', comunicacionesSchema);