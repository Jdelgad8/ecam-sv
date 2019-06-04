const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviciosBasicosSchema = new Schema({
  id_encuesta: String,
  acceso: String,
  servicios: String,
  ambientales: String,
  conflicto_social: String,
  volatilidad: String,
  otro: String,
});

module.exports = mongoose.model('ServiciosBasicos', serviciosBasicosSchema);