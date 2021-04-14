const mongoose = require('mongoose');

//------------ Institution Schema ------------//
const InstitutionSchema = new mongoose.Schema({
    name: {
        type: String,
      required: true
    },
    coaches: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach'
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }],
    localization: {
        state: {
          type: String,
          required: true
        },
        country: {
          type: String,
          required: true
        }
    }

  }, { timestamps: true });

const Institution = mongoose.model('Institution', InstitutionSchema);

module.exports = Institution;