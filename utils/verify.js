const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token)
    {
        res.status(404).send("Not atheticated.")
    }

    jwt.verify(token,process.env.jwt,(err,user)=>{
        if(err)
        {
            res.status(404).send("Not valid")

        }
        req.user = user ;
        next() ; 
    })
}
const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin)
        {
            next();
        }
        else{
            res.status(404).send("U r not authorised")
        }
    })
}
const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin)
        {
            next();
        }
        else{
            res.status(404).send("U r not authorised")
        }
    })
}

module.exports = {verifyToken,verifyUser,verifyAdmin}