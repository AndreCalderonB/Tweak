const User = require('../models/User');

exports.showAllHandle = async (req, res) => {
    const users = await User.find({_id: {$ne : req.params.id}});
    res.send(users);
}

exports.showHandle = async (req, res) => {
    const user = await User.findOne({_id : req.params.id});
    res.send(user);
}