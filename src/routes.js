const { Router } = require('express')

const ExameController = 
    require('./controllers/exameController')

const MedicoController = 
    require('./controllers/medicoController')

const FuncionarioController =
    require('./controllers/funcionarioController')

const TipoExameController = 
    require('./controllers/tipoExameController')

const MonitorarController = 
    require('./controllers/monitorarController')

const routes = new Router();

routes.get('/exame', ExameController.index)
routes.post('/exame', ExameController.store)

routes.get('/medico', MedicoController.index)
routes.post('/medico', MedicoController.store)

routes.get('/funcionario', FuncionarioController.index)
routes.post('/funcionario', FuncionarioController.store)

routes.get('/tipoExame', TipoExameController.index)
routes.post('/tipoExame', TipoExameController.store)

routes.get('/monitorar', MonitorarController.index)
routes.get('/monitorar/:id', MonitorarController.show)
routes.post('/monitorar', MonitorarController.store)
routes.delete('/monitorar/:id', MonitorarController.delete)



module.exports = routes