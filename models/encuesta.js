const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const encuestaSchema = new Schema({
  id_encuestador: String,
  nombre_encuestado: String,
  nombre_sitio: String,
  nicho_ambiente: String,
  empresa: String,
  sector_productivo: String,
  latitud: Number,
  longitud: Number,
  codigo_olc: Number,
  url: String,
  descripcion: String,
});


module.exports = mongoose.model('Encuesta', encuestaSchema);