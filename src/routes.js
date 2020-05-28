const express = require('express');
const routes = express.Router();

const multer = require('multer');
const multerConfig = require('./config/multer');
const upload = multer(multerConfig);

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const DogController = require('./controllers/DogController');
const CatController = require('./controllers/CatController');
const SearchController = require('./controllers/SearchController');
const FileController = require('./controllers/FileController');
const FavoritesController = require('./controllers/FavoritesController');
const NotificationController = require('./controllers/NotificationController');

const authMiddleware = require('./middlewares/auth');
const ongMiddleware = require('./middlewares/ong');

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
routes.post('/ongs', OngController.store);

routes.use(authMiddleware);

routes.get('/dogs', DogController.index);
routes.get('/cats', CatController.index);
routes.get('/search', SearchController.index);
routes.get('/favorites', FavoritesController.index);
routes.get('/notifications', NotificationController.index);

routes.post('/favorites/:petid', FavoritesController.store);
routes.post('/notifications/:id', NotificationController.update);

routes.delete('/session', SessionController.delete);

routes.use(ongMiddleware);

routes.post('/dogs', DogController.store);
routes.post('/cats', CatController.store);
routes.post('/files/:petid', upload.single('file'), FileController.store);

module.exports = routes;