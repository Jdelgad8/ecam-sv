const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const acueductoSchema = new Schema({
  id_encuesta: String,
  estacion_recurso: String,
  disponibilidad: String,
  cantidad: Number,
  requiere_tratamiento: String,
  fallos: String,
  perdidas: Number,
  danos: String,
  descripcion: String,
  estacion: String,
  operacion: String,
  presupuesto: Number,
  poblacion_atendida: Number,
  cantidad_recursos: Number,
});

module.exports = mongoose.model('Acueducto', acueductoSchema);