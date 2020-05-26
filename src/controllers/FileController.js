const firebase = require('../database/firebase');
module.exports = {
    async store(req, res){
        const { originalname:name, filename: path } = req.file;

        const fileId = await firebase.database().ref('/files/').push().key;

        await firebase.database().ref('/files/' + fileId).set({
            name,
            path,
            petId: req.params.petid
        });

        return res.json("Upload realizado com sucesso");
    }
}