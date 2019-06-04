const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActividadesEconomicasSchema = new Schema({
  id_encuesta: String,
  industria: String,
  agricultura_opcion: String,
  agricultura_cantidad: String,
  servicios_opcion: String,
  servicios_cantidad: String,
  gobierno_opcion: String,
  gobierno_cantidad: String,
});

module.exports = mongoose.model('ActividadesEconomicas', ActividadesEconomicasSchema);