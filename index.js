const express=require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute =require('./routes/auth');
const userRoute =require('./routes/users');
const roomRoute =require('./routes/rooms');
const hotelRoute =require('./routes/hotels');
const cookieparser =require('cookie-parser'); 
//CREATION OF APP OBJECT FROM EXPRESS
const app = express() ; 
// const allowedOrigins = ['http://localhost:3000']; // Replace with your React app's origin

// const options = {
//   origin: allowedOrigins
// };

// app.use(cors(options));
dotenv.config();
const PORT=8000 ; 
//MONGO DB INITIAL CONNECTION
 const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
    console.log("connected to mongo db");
    }catch(err){
       throw err;
    }
 }

//APIS
app.get('/',(req,res)=>{
   
    res.send("Hello from server");
})

//MIDDLEWARES
//for sending/receiving json data
app.use(cookieparser()); 
app.use(express.json());

app.use("/auth",authRoute);
app.use("/users",userRoute);
app.use("/hotels",hotelRoute);
app.use("/rooms",roomRoute);

//ERROR HANDLER MIDDLEWARE
app.use((err,req,res,next)=>{
    const errStatus=err.status ||500
    const errMessage = err.message || "Something went wrong"
    return res.status(errStatus).json({
       success:false ,
       status:errStatus,
       message:errMessage,
       stack:err.stack
    });
})




 //run when mongodb disconnects somehow
// mongoose.connection.on("disconnected",()=>{
//     console.log("MongoDB Disconnected");
// })
//try to connected again
// mongoose.connection.on("connected",()=>{
//     console.log("Mongodb connected");
// })
app.listen(PORT,()=>{
    connect();
    console.log("COnnected")})