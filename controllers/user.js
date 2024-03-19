const User  = require('../models/user');

const updateUser = async (req,res,next)=>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateUser)


    }
    catch (err) {
        next(err);

    } 
}
const deleteUser = async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Success!User data has been deleted")


    }
    catch (err) {
        next(err);

    }
}
const getUser = async (req,res,next)=>{
    try {
        const getUser = await User.findById(req.params.id);
        res.status(200).json(getUser)


    }
    catch (err) {
        next(err);

    }
}
const getAllUser = async (req,res,next)=>{
    try {
        const allUser = await User.find();
        res.status(200).json(allUser)

    }
    catch (err) {
        next(err);

    }
}
module.exports = {updateUser,deleteUser,getUser,getAllUser};