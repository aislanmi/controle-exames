const Funcionario = require('../models/funcionario')

module.exports = {

  async index(req, res) {
    const funcionario = await Funcionario.find()
    return res.json(funcionario)
  },

  async store(req, res) {
    const { nomeFuncionario, cpf, funcao } = req.body

    const funcionario = await Funcionario.create({
      nomeFuncionario,
      cpf,
      funcao

    })

    return res.json(funcionario)  

    }


}