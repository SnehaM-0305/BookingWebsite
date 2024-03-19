import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {Maillist} from '../../components/mailList/Maillist';
import {Footer} from '../../components/footer/Footer';
import { useContext, useState } from 'react';
import {useFetch} from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import {Context} from '../../context/Context';
import { AuthContext } from '../../context/authContext';
import { Reserve } from '../../components/reserve/Reserve';
const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [slide,setSlide] = useState(0);
  const [open,setOpen] = useState(false);
  const {data,loading,error} = useFetch(`/hotels/find/${id}`)
  const {date,options} = useContext(Context);
  const [openModal,setOpenModal] = useState(false);
  const navigate = useNavigate();
  const {user} = useContext(AuthContext) ;
  const handleOpen=(i)=>{
    setSlide(i);
    setOpen(true);
  }
  const handleMove=(direction)=>{
    let newSlide ;
    if(direction==="l"){
      newSlide = slide===0?5:slide-1;
    }
    else{
      newSlide = slide===5?0:slide+1;
    }
    setSlide(newSlide);
  }
  const handleClick=()=>{
    if(user){
    setOpenModal(true);
    }
    else{
      navigate("/login")
    }
      }
  console.log(date);
 

  const   MILLI = 1000*60*60*24 ; 
  function dayDifference(date1,date2){
    const time = Math.abs(date2.getTime()-date1.getTime());
    const diffDays = Math.ceil(time/MILLI);
    return diffDays;
  }
   if (loading) {
    return <div>Loading...</div>;
  }
  const Days = dayDifference(date[0].endDate , date[0].startDate)+1;
  
  const fin = Days*data.cheapestPrice*options.room;
 

 

 
  
  return (
    <div><Navbar/>
    <Header type="list"/>
    {loading?"loading":<><div className="hotelContainer">
     {open &&  <div className="slider">
      <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>{setOpen(false)}}/>
      <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>{handleMove("l")}}/>
      <div className="sliderWrapper">
        <img src={data.photo[slide]} alt="" className="sliderImg" />
      </div>
      <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>{handleMove("r")}}/>
      </div>}
      <div className="hotelWrapper">
       <button className="bookNow">Book now!</button>

        <h1 className="hotelTitle">{data.name}</h1>
        <div className="hotelAddress">
         <FontAwesomeIcon icon={faLocationDot}/>
         <span>{data.address}</span> 
         </div>
         <span className='hotelDistance'>{data.distance} Km away from airport</span>
         <span className="hotelPrice">
          Book a stay over {data.cheapestPrice} at this prpperty and egt free airport ride.
         </span>
         
         <div className="hotelImages">
{data.photo?.map((img,i)=>(
  <div className="hotelImageWrapper" key={i}>
    <img src={img} onClick={()=>{handleOpen(i)}} alt="" className="hotelImg" />
  </div>
))}
         </div>
         <div className="hotelDetails">
          <div className="hotelDetailText">
            <div className="hotelTitle"><h1>{data.title}</h1></div>
            <div className="hotelDesc">
              <p>{data.desc}</p>
            </div>
          </div>
          <div className="hotelDetailPrice">
            <h1>Perfect for {Days} days trip</h1>
            <span>Located near sea view</span>
            <h2><b>${fin}</b>({Days} night {options.room} Rooms)</h2>
            <button onClick={handleClick}>Reserve / Book Now!</button>
          </div>
         </div>
        </div>
        <Maillist/>
        <Footer/>
      </div></>}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
    
   

  )
}
export default Hotel ; 
