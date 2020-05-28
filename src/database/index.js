const mongoose = require('mongoose');

class Database{
    constructor(){
        this.mongo();
    }

    mongo(){
        this.mongoConnection = mongoose.connect(
            process.env.MONGO_URL,
            { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true }
        )
    }
}

module.exports = new Database();