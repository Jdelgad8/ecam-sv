const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tecnologiaSchema = new Schema({
  id_encuesta: String,
  medio_transporte: String,
  cantidad: Number,
  personas_servidas: Number,
  cantidad_carga: Number,
  ano_fabricacion: Number,
  tipo_motor: String,
  impacto: String
});

module.exports = mongoose.model('Tecnologia', tecnologiaSchema);