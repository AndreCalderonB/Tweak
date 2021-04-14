const User = require('../models/User');
const Sport = require('../models/Sports');
exports.showAllHandle = async (req, res) => {

    const users = await User.find({_id: {$ne : req.params.id}, completedRegistration: true});
    res.send(users);
}

exports.showHandle = async (req, res) => {
    
    User.findOne({_id : req.params.id}).then(user => {
        Sport.findOne({_id:user.details.sport}).then(sport =>{
            console.log(user.details)
            
            const data = {
                userInfo:user,
                sportName: sport.name
            }
            res.send(data);
        })
    });

    
}