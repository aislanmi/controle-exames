const mongoose = require('mongoose')
const ExamesSchema = new mongoose.Schema({
  descExame: String,
  localizacao: String,
  validade: Number
}, {
  timestamps: true
})

module.exports = mongoose.model("Exames", ExamesSchema)

