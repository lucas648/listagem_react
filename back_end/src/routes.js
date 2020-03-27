const { Router } =  require('express');
const TaskControler = require('./controlers/tasksControler')

const routes = Router();

routes.post('/tasks', TaskControler.store);

routes.get('/list-tasks', TaskControler.index);

module.exports = routes;