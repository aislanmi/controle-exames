const Medico = require('../models/medico')

module.exports = {

  async index(req, res) {
    const medico = await Medico.find()
    return res.json(medico)
  },

  async store(req, res) {
    const { nomeMedico, crm } = req.body

    const medico = await Medico.create({
      nomeMedico,
      crm,

    })

    return res.json(medico)  

    }


}