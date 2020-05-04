const firebase = require('../database/firebase');

module.exports = {
    async store(req, res){
        await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return res.json(errorCode, errorMessage);
        });
        return res.json({message: 'logado'})
    },
    async delete(req, res){
        await firebase.auth().signOut().then(function(){
            return res.json({message: 'deslogado'});
        }).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return res.json(errorCode, errorMessage)
        })
    }
}