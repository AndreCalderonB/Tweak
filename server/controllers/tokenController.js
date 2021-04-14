const Token = require('../models/Tokens');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.checkToken = async (req, res) => {  
    console.log("======== Verifying token =============")
     Token.findOne({token:req.body.__session}).then(token => {
         console.log(req.body.__session)
         console.log(token)
         if(token){
            console.log("Token Found!")
            if(token.userID === req.body.__user){
                if(Date.now() < token.expirationDate){
                    User.findOne({_id:req.body.__user}).then(user =>{
                        const UserInfo = {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            completedRegistration : user.completedRegistration,
                            following : user.following,
                            followers : user.followers
                        };
                        const minutes = 30 
                        const newToken = jwt.sign({_id: user._id}, 'IADGUAIJSDGNA');
                        const expirationDate = Date.now() + minutes*60000
                        Token.updateOne({token:req.body.__session},{$set:{"token":newToken,"expirationDate":expirationDate}}).then(success =>{
                            console.log("Token updated!")
                            if(success){
                                msg = "Success"
                                res.send({UserInfo,newToken,msg})
                            }
                        })
                    })
                }else{
                    res.send("Token vencido :(")
                }
             }else{
                res.send(false)
             }
         }else{
            console.log("Token not found!")
             res.send("No se encontró el token")
         }

     })  
    
}