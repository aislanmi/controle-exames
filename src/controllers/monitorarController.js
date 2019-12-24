const Monitorar = require('../models/monitorar')

const { addDays, format } = require('date-fns')

const Exame = require('../models/exame')
const Funcionario = require('../models/funcionario')
const Tipo = require('../models/tipoExame')
const Medico = require('../models/medico')

//const checkUser = require('../middlewares/checkUser')

module.exports = {
  
  async index(req, res) {
    const monitorar = await Monitorar.find()
    return res.json(monitorar)

  },

  async show(req, res) {
    const { id } = req.params
    const monitorar = await Monitorar.findById(id)

    return res.json(monitorar)

  },

  async store(req, res) {
    const {
      idFuncionario, 
      idExame,
      idTipo,
      idMedico,
      dataExame, 

    } = req.body

    try {

      var funcionarioExist = await Funcionario.findById(idFuncionario)
      var exameExist = await Exame.findById(idExame)
      var tipoExist = await Tipo.findById(idTipo)
      var medicoExist = await Medico.findById(idMedico)
      
    } catch {

      if (!funcionarioExist) {
        return res
          .status(400)
          .json({ Error: `ID do funcionário é inválido, deve conter exatamente 24 caracteres.` })

      }

      else if (!exameExist) {
        return res
          .status(400)
          .json({ Error: `ID do exame é inválido, deve conter exatamente 24 caracteres.` })

      }

      else if (!tipoExist) {
        return res
          .status(400)
          .json({ Error: `ID do tipo de exame é inválido, deve conter exatamente 24 caracteres.` })

      }

      else if (!medicoExist) {
        return res
          .status(400)
          .json({ Error: `ID do médico é inválido, deve conter exatamente 24 caracteres.` })

      }

    }

    if (!funcionarioExist || !exameExist || !tipoExist || !medicoExist) {
      return res.status(400).json({ Error: `Algum dos ID é inexistente.` })

    } else {

      const { nomeFuncionario, cpf, funcao } = funcionarioExist
      const { descExame, localizacao, validade } = exameExist    
      const { tipo } = tipoExist
      const { nomeMedico, crm } = medicoExist
      
      
      let dtVencExame = addDays(new Date(dataExame), parseInt(validade))
      let dtVencFormat = format(new Date(dtVencExame), 'dd/MM/yyyy')

      dtExameFormat = format(new Date(dataExame), 'dd/MM/yyyy')

      const monitorar = await Monitorar.create({
        idFuncionario, 
        nomeFuncionario,
        cpf,
        funcao,

        idExame,
        descExame,
        localizacao,
        validade,

        idMedico, 
        nomeMedico,
        crm,

        idTipo, 
        tipo,
  
        dtVencFormat,
        dtExameFormat, 
  
      })


      return res.json(monitorar)

    }

  },

  async delete(req, res) {
    const { id } = req.params
    const monitorar = await Monitorar.findByIdAndRemove(id)

    return res.send(`Monitoramento de id ${monitorar.id} excluido com sucesso.`)

  }



}