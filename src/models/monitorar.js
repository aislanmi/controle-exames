const Funcionario = require('./funcionario')

const mongoose = require('mongoose')
const MonitorarSchema = new mongoose.Schema({
    idFuncionario: String,
    nomeFuncionario: String,
    cpf: String,
    funcao: String,

    idExame: String,
    descExame: String,
    localizacao: String,
    validade: String,

    idTipo: String,
    tipo: String,

    idMedico: String,
    nomeMedico: String,
    crm: String,

    dataExame: Date,

    dtExameFormat: String,
    dtVencFormat: String,
    
})

module.exports = mongoose.model("Monitorar", MonitorarSchema)

