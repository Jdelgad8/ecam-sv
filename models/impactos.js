const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const impactosSchema = new Schema({
  id_encuesta: String,
  impactos: String,
  magnitud_industrial: String,
  consecuencias_industrial: String,
  magnitud_comercial: String,
  consecuencias_comercial: String,
  magnitud_humano: String,
  consecuencias_humano: String,
});

module.exports = mongoose.model('Impactos', impactosSchema);