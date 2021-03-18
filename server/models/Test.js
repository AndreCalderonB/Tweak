const mongoose = require('mongoose');
const { Schema } = mongoose;

//------------ typeTestSchema Schema ------------//
const typeTestSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
   },
}, { timestamps: true});
//------------ testSportSchema Schema ------------//
const testSportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  typeTest: {
    type: [typeTestSchema] ,
    required: true
 },
}, { timestamps: true});


const Test = mongoose.model('Test', testSportSchema);

module.exports = Test;