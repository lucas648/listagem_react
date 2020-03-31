const { Router } =  require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const TaskControler = require('./controlers/tasksControler')

const routes = Router();

routes.post('/tasks', TaskControler.store);

routes.get('/list-tasks', TaskControler.index);

routes.delete('/tasks/:_id', TaskControler.delete);


module.exports = routes;