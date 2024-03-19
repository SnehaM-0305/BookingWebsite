const Room = require('../models/room');
const Hotel = require('../models/hotel');

const createRoom = async (req,res,next)=>{
const hotelId = req.params.id;
console.log(hotelId);
const newRoom = new Room(req.body);


try{
    const savedRoom = await newRoom.save();
    await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id},})
    res.status(200).json(savedRoom);
}
catch(err){
    next(err);

}

}


const updateRoom = async (req,res,next)=>{
    try {
        const updatedRoom = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedRoom)


    }
    catch (err) {
        next(err);

    } 
}
const deleteRoom = async (req,res,next)=>{
    try {
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json("Success! Room data has been deleted")


    }
    catch (err) {
        next(err);

    }
}
const getRoom = async (req,res,next)=>{
    try {
        const getRoom = await Room.findById(req.params.id);
        res.status(200).json(getRoom)


    }
    catch (err) {
        next(err);

    }
}
const getAllRoom = async (req,res,next)=>{
    try {
        const allRoom = await Room.find();
        res.status(200).json(allRoom)

    }
    catch (err) {
        next(err);

    }
}
const updateRoomAvailable=async (req,res,next)=>{
    try {
       await Room.updateOne({'roomNumber._id':req.params.id},{$push:{
        "roomNumber.$.unavailableDates":req.body.date
       }})
        res.status(200).json({message:"Room has been updated"})


    }
    catch (err) {
        next(err);

    } 
}
module.exports={createRoom,updateRoom,deleteRoom,getRoom,getAllRoom,updateRoomAvailable}