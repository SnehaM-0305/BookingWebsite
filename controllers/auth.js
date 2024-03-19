const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const User  = require('../models/user');
const register = async(req ,res,next)=>{
try{
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password,salt);

    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hash
    })

    await newUser.save();
    res.status(201).send("User has been created");

}
catch(err){
    next(err);

}
}
const login = async(req ,res,next)=>{
    try{
        const user = await User.findOne({username:req.body.username})
        if(!user){
            res.status(404).send("Username not found")
        }
        const correct = await bcrypt.compare(req.body.password,user.password);
        if(!correct)
        {
            res.status(400).send("Wrong password or username")

        }
        const token = jwt.sign({id:user._id , isAdmin:user.isAdmin},process.env.jwt);
        const {password ,isAdmin,...otherDetails} = user._doc;
        res.cookie("access_token",token,{httpOnly:true}).status(201).json(otherDetails);
    
    }
    catch(err){
        next(err);
    
    }
    }
module.exports ={register,login} 