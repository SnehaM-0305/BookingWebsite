const mongoose = require('mongoose');


//CREATING SCEHMA FOR ROOM

const RoomSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   maxpeople:{
    type:Number,
    required:true
   },
  roomNumber:[{number:Number,unavailableDates:{type:[Date]}}],

   
})
const Room = mongoose.model("Room",RoomSchema);
module.exports = Room;