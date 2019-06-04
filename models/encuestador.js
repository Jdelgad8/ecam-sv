const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const encuestadorSchema = new Schema({
  nombres: String,
  apellidos: String,
  correo: String,
  password: String
});


module.exports = mongoose.model('Encuestador', encuestadorSchema);