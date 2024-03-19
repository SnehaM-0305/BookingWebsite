import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export const Reserve = ({setOpen,hotelId}) => {
  const {data,loading,error} = useFetch(`/hotels/room/${hotelId}`)
  const {date} = useContext(Context)
 const [selectedRooms , setSelectedRooms] = useState([]);
 const getDatesInRange = (startDate,endDate)=>{
  const start = new Date(startDate) ; 
  const end = new Date(endDate);
  const datestart = new Date(start.getTime());
  let list = [] ;
  while(datestart<=end){
    list.push(new Date(datestart))
    datestart.setDate(datestart.getDate()+1);

  }
  return list ;
 }
 const allDates = getDatesInRange(date[0].startDate , date[0].endDate) ; 
 const isAvailable = (roomNumber)=>{
  
  // const isFound = roomNumber.unavailableDates.some(dates=>
  //  allDates.includes(new Date(dates).getTime()) ) ; 
  //  return !isFound ;
   
   const formattedAllDates = allDates.map(date => date.toISOString().split('T')[0]);
    
  
   const formattedUnavailableDates = roomNumber.unavailableDates.map(date => date.split('T')[0]);

   
   const isUnavailable = formattedUnavailableDates.some(date =>
       formattedAllDates.includes(date)
   );

  
   return !isUnavailable;
 }
  const handleSelect=(e)=>{
    const checked = e.target.checked ; 
    const value = e.target.value ; 
    setSelectedRooms(checked?[...selectedRooms,value]:selectedRooms.filter((item)=>item!==value))
  }
   const navigate = useNavigate();
  const handleClick=async ()=>{
try{
  await Promise.all(selectedRooms.map(async(roomId)=>{
    const res = await axios.put(`/rooms/available/${roomId}`,{date:allDates});
    return res.data;
  })
)
setOpen(false);
navigate("/")
}
catch(err){
  console.error("Error in handleClick:", err);
}
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null; // or any fallback UI if needed
  }
  return (
    <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>{setOpen(false)}}></FontAwesomeIcon>
            <span>Select your rooms</span>
            {data.map(item=>(
              <div className="rItem">
                <div className="rItemInfo">
                  <div className="rTitle">{item.title}</div>
                  <div className="rDesc">{item.description}</div>
                  <div className="rMaxPeople">Max People:<b>{item.maxpeople}</b></div>
                  <div className="rPrice">{item.price}</div>
                </div>
                <div className="SelectRooms">
                  {item.roomNumber.map(roomnum=>(
                    <div className="room" key={roomnum.id}>
                    <label>{roomnum.number}</label>
                    <input type="checkbox" value={roomnum._id} onChange={handleSelect}
                    disabled={!isAvailable(roomnum)}
                    >

                    </input>
                    </div>
                  ))
                 }
                  </div>
               
              </div>
              
            ))}
           
           <button onClick={handleClick} className="rButton">Reserve Now</button> 
        </div>
    </div>
  )
}
