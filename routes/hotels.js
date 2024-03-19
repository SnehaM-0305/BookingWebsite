const express = require("express");
const router = express.Router();
const Hotel = require('../models/hotel');
const {createHotel,updateHotel,deleteHotel,getHotel,getAllHotel, countByCity, countByType,getHotelRooms} = require('../controllers/hotel');
const { verifyAdmin } = require("../utils/verify");
//CREATE
router.post('/create', verifyAdmin, createHotel);
//UPDATE
router.put('/:id',verifyAdmin, updateHotel);
//DELETE
router.delete('/:id',verifyAdmin, deleteHotel);
//GET
router.get('/find/:id', getHotel);
//GET ALL
router.get('/',getAllHotel);
router.get('/countbycity',countByCity);
router.get('/countbytype',countByType);
router.get('/room/:id',getHotelRooms);

module.exports = router;