const Notification = require('../schemas/notification');

module.exports = {
    async index(req, res){
        const notifications = await Notification.find({
            user: req.uid
        }).sort({ createAt: 'desc' }).limit(20);

        return res.json(notifications);
    },
    async update(req, res){
        const notification  = await Notification.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true }
        );

        return res.json(notification);
    }
}