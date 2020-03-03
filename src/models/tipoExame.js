const mongoose = require('mongoose')
const TipoExameSchema = new mongoose.Schema({
  tipo: String,

}, {
  timestamps: true
})

module.exports = mongoose.model("TipoExame", TipoExameSchema)