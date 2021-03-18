const mongoose = require('mongoose');

//------------ TypeSport Schema ------------//

const typeSportSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    positions:{
        type: Boolean,
        required: true
    },
}, { timestamps: true});

//------------ Sport Schema ------------//
const SportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  typeSport: {
    type: [typeSportSchema],
    required: true
  },
  test: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test'
  } ]
}, { timestamps: true });


const Sport = mongoose.model('Sport', SportSchema);

module.exports = Sport;