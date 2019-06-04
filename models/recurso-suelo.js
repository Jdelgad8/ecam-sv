const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recursoSueloSchema = new Schema({
  id_encuesta: String,
  estacion: String,
  disponibilidad: String,
  area: Number,
  calidad: String,
});

module.exports = mongoose.model('RecursoSuelo', recursoSueloSchema);