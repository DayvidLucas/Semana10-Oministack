const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SeachController = require('./controllers/SeachController')
const routes = Router()

routes.post('/devs',DevController.store )
routes.get('/devs', DevController.index)
routes.get('/search', SeachController.index)
module.exports =  routes