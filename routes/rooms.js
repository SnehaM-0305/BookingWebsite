const express = require("express");
const router = express.Router();
const Room = require('../models/room');
const {createRoom,updateRoom,deleteRoom,getRoom,getAllRoom,updateRoomAvailable} = require('../controllers/rooms');
const { verifyAdmin } = require("../utils/verify");
//CREATE
router.post('/:id', verifyAdmin, createRoom);
//UPDATE
router.put('/:id',verifyAdmin, updateRoom);
router.put("/available/:id" , updateRoomAvailable)
//DELETE
router.delete('/:id',verifyAdmin, deleteRoom);
//GET
router.get('/:id', getRoom);
//GET ALL
router.get('/',getAllRoom);

module.exports = router;