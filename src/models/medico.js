const mongoose = require('mongoose')
const MedicosSchema = new mongoose.Schema({
    nomeMedico: String,
    crm: String,

}, {
  timestamps: true
})

module.exports = mongoose.model("Medicos", MedicosSchema)