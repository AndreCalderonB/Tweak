const mongoose = require('mongoose');

//---------- Tokens de sesion para autenticar usuarios ------//

const TokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required:true
    },
    userID:{
        type: String,
        required:true
    },
    expirationDate:{
        type:Date,
        required:true
    }
}, { timestamps: true });

const Token = mongoose.model('Token', TokenSchema);

module.exports = Token;