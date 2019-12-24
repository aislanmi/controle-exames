const TipoExame = require('../models/tipoExame')

module.exports = {

  async index(req, res) {
    const tipoExame = await TipoExame.find()
    return res.json(tipoExame)
  },

  async store(req, res) {
    const { tipo } = req.body

    const tipoExame = await TipoExame.create({
      tipo

    })

    return res.json(tipoExame)  

    }


}