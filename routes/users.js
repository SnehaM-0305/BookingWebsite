const express = require("express");
const router = express.Router();
const User= require('../models/user');
const {updateUser,deleteUser,getUser,getAllUser} = require('../controllers/user');
const {verifyToken,verifyUser, verifyAdmin} = require("../utils/verify");

// router.get("/checkauth" ,verifyToken , (req,res,next)=>{
//     res.send("Hello user u r authenticated");
// })
// router.get("/checkuser/:id" ,verifyUser , (req,res,next)=>{
//     res.send("Hello user u r authenticated and u can delet your account");
// })
// router.get("/checkadmin/:id" ,verifyAdmin , (req,res,next)=>{
//     res.send("Hello admin , u can delete all accounts");
// })
//UPDATE

router.put('/:id',verifyUser, updateUser);
//DELETE
router.delete('/:id',verifyUser, deleteUser);
//GET
router.get('/:id',verifyUser, getUser);
//GET ALL
router.get('/',verifyAdmin,getAllUser);

module.exports = router;