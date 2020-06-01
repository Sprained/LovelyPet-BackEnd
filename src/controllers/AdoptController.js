const fns = require('date-fns');
const { addDays, isSameDay } = fns;

const firebase = require('../database/firebase');
const Adopt = require('../schemas/adopt');

module.exports = {
    async verify(req, res){
        const adopts = await Adopt.find();

        adopts.forEach(async adopt => {
            const { pet, date_end, no } = adopt;

            if(isSameDay(date_end, new Date())){
                await firebase.database().ref(no).child(pet).set({
                    adopted: false
                });
                await Adopt.deleteOne({ pet:pet })
            }
        })
    },
    async store(req, res){
        const user = req.uid;
        const pet = req.params.petid;
        const no = req.params.petno;

        const date_end = addDays(new Date(), 4);

        await Adopt.create({
            user,
            pet,
            date_end,
            no
        });

        return res.json('Adoção cadastrada!')
    }
}
