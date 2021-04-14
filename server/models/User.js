const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  sport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sport'
  },
  team: {
    type: String,
    required: false
  },
  position: {
    type: String,
    required: true
  },
  localization: {
    state: {
      type: String,
      required: false
    },
    country: {
      type: String,
      required: false
    }
  }
})

//------------ User Schema ------------//
const UserSchema = new mongoose.Schema({
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
  role:{
    type:String,
    required:false
  },
  resetLink: {
    type: String,
    default: ''
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  details: {
    type: detailSchema
  }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;