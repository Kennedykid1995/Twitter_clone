const db = require("../models/index");
const jwt = require("jsonwebtoken"); 

exports.signin = function(){

}
exports.signup = async function(req, res, next){
    try{
        //create a user
        //create a token (signing a token)
            //process .env.SECRET_KEY
        let user = await db.User.create(req.body); 
        let {id, username, profileImageUrl} = user;
        let token = jwt.sign({
            id,
            username, 
            profileImageUrl
        }, process.env.SECRET_KEY);
        return res.status(200).json({
            id, 
            usename, 
            profileImageUrl,
            token,
        }); 
    }catch(err){
        //see what kind of error 
        //if it is a certain error
        //respond with username/already taken
        //otherwise just send back a generic 400
        if(err.code === 11000){
            err.message = "Sorry that username and/ or email is taken."
        }
        return next({
            status: 400,
            message: err.message,
        })
    }
}