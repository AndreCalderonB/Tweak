const mongoose = require('mongoose');

//------------ Invitation Schema ------------//
const InvSchema = new mongoose.Schema({
    coach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }
  }, { timestamps: true });

const Invitation = mongoose.model('Invitation', InvSchema);

module.exports = Invitation;