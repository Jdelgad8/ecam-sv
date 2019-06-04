const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const viasSchema = new Schema({
  id_encuesta: String,
  tipo_via: String,
  perdidas_monetarias: Number,
  tiempo_desplazamiento: String,
  costo_desplazamiento: Number,
  presenta: String,
  estacion: String,
  operacion: String,
  presupuesto: Number,
  fuente: String,
  cantidad: Number,
  mes: String
});

module.exports = mongoose.model('Vias', viasSchema);