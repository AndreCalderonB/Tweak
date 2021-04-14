const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    birthdate: {
      type: Date,
      required: true
    },
    mainSport: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sport'
    },
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
  })

//------------ Coach Schema ------------//
const CoachSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    verified: {
      type: Boolean,
      default: false
    },
    completedRegistration:{
      type:Boolean,
      default: false
    },
    resetLink: {
      type: String,
      default: ''
    },
    followers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Coach'
    }],
    following: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Coach'
    }],
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team' 
    },
    details: {
      type: detailSchema
    }
  }, { timestamps: true });

const Coach = mongoose.model('Coach', CoachSchema);

module.exports = Coach;