const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const DogController = require('./controllers/DogController');

const authMiddleware = require('./middlewares/auth');
const ongMiddleware = require('./middlewares/ong');

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
routes.post('/ongs', OngController.store);

routes.use(authMiddleware);

routes.delete('/session', SessionController.delete);

routes.use(ongMiddleware);

routes.post('/dogs', DogController.store);

module.exports = routes;