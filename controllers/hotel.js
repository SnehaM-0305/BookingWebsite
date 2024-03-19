const Hotel  = require('../models/hotel');
const Room = require('../models/room');
const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body,next);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)


    }
    catch (err) {
        next(err);

    } 
}
const updateHotel = async (req,res,next)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)


    }
    catch (err) {
        next(err);

    } 
}
const deleteHotel = async (req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Success! Hotel data has been deleted")


    }
    catch (err) {
        next(err);

    }
}
const getHotel = async (req,res,next)=>{
    try {
        const getHotel = await Hotel.findById(req.params.id);
        res.status(200).json(getHotel)


    }
    catch (err) {
        next(err);

    }
}
const getAllHotel = async (req, res, next) => {
    const { min, max, ...others } = req.query;
  
    // Create a price filter object if min or max are provided
    let priceFilter;
    if (min !== undefined || max !== undefined) {
      priceFilter = {};
      if (min !== undefined) {
        priceFilter["$gte"] = min; // Use $gte for greater than or equal
      }
      if (max !== undefined) {
        priceFilter["$lte"] = max; // Use $lte for less than or equal
      }
    }
  
    try {
      // Combine price filter with other filters from req.query
      const query = { ...others };
      if (priceFilter) {
        query.cheapestPrice = priceFilter;
      }
  
      const allHotels = await Hotel.find(query);
      res.status(200).json(allHotels);
    } catch (error) {
      next(error); // Pass error to error handler middleware
    }
  };
const countByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",") ;

    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city});
        }))
        res.status(200).json(list)

    }
    catch (err) {
        next(err);

    }
}
const countByType = async (req,res,next)=>{
    
    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"})
    const ApartmentCount = await Hotel.countDocuments({type:"apartment"})
    const resortCount = await Hotel.countDocuments({type:"resort"})
    const villaCount =await  Hotel.countDocuments({type:"villa"})
    const cabinCount = await Hotel.countDocuments({type:"cabin"})
      
        res.status(200).json([
            {
                type:"hotel",count:hotelCount
            },
            {
                type:"apartment",count:ApartmentCount
            },
            
            {
                type:"resort",count:resortCount
            },
            
            {
                type:"villa",count:villaCount
            },
            
            {
                type:"cabin",count:cabinCount
            },
            

        ])

    }
    catch (err) {
        next(err);

    }
}
const getHotelRooms =async (req,res,next)=>{
    try{
const hotel = await Hotel.findById(req.params.id);

const list = await Promise.all(hotel.rooms.map(room=>{
    return Room.findById(room)
}))
res.status(200).json(list);
    }
    catch(error){
        next(error);
    }

}
module.exports = {createHotel,updateHotel,deleteHotel,getHotel,getAllHotel,countByCity,countByType,getHotelRooms};