const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saludSchema = new Schema({
  id_encuesta: String,
  esperanza_vida: String,
  desnutricion: String,
  numero_visitas: Number,
  ano: Number,
  personas: Number,
  exposicion_impactos: String,
  conflicto_social: String,
  acceso_tierra: String,
  pobreza: String,
  desempleo: String,
});

module.exports = mongoose.model('Salud', saludSchema);