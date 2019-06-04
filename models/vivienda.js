const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const viviendaSchema = new Schema({
  id_encuesta: String,
  ambientales: String,
  conflicto_social: String,
  pobreza: String,
  otro: String,
  material_construccion: String,
  numero_personas: Number
});

module.exports = mongoose.model('Vivienda', viviendaSchema);