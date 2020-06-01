require('dotenv/config');

const express = require('express');
const routes = require('./routes');
require('./database/firebase');
require('./database');

const timer = require('./utils/timer');

class App {
    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
        timer;
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

module.exports = new App().server;