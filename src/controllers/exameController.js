const Exame = require('../models/exame')

module.exports = {

  async index(req, res) {
    const exame = await Exame.find()
    return res.json(exame)

  },

  async show(req, res) {
    const { id } = req.params
    const exame = await Exame.findById(id)

    return res.json(exame)

  },

  async store(req, res) {
    const { descExame, localizacao, validade } = req.body

    const exame = await Exame.create({
      descExame,
      localizacao,
      validade

    })

    return res.json(exame)

  }


}