const AdoptController = require('../controllers/AdoptController');

function timer(){
    setInterval(AdoptController.verify, 1000 * 60 * 60 * 24);

}

module.exports = timer();