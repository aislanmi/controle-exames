const mongoose = require('mongoose')
const FuncionariosSchema = new mongoose.Schema({
    nomeFuncionario: String,
    cpf: String,
    funcao: String,

}, {
  timestamps: true
})

module.exports = mongoose.model("Funcionario", FuncionariosSchema)