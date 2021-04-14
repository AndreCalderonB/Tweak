const mongoose = require('mongoose');

//------------ Coach Schema ------------//
const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
      required: true
    },
    coach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach'
    },
    teamMembers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    sport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sport'
    }
  }, { timestamps: true });

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;