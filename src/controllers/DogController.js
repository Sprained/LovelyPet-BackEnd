const firebase = require('../database/firebase');

module.exports = {
    async store(req, res){
        return res.json(req.uid)
    }
}