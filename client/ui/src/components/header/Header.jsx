
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {faBed, faCalendar, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range';
import {useContext, useState} from 'react' ;
import "./header.css";
import {format} from 'date-fns'
import {useNavigate} from 'react-router-dom';
import {Context} from '../../context/Context';

import { AuthContext } from '../../context/authContext';

 const Header = ({type}) => {
    const navigate = useNavigate();
    const {dispatch}   = useContext(Context);
    const [destination,setDestination] = useState("");
    const [openDate,setOpenDate] = useState(false);
    const [date ,setDate] = useState([
        {
            startDate:new Date(),
            endDate:new Date() , 
            key:'selection'
        }
    ])
    const [openOptions,setOpenOptions] = useState(false);
    const [options , setOptions] = useState({
       adult:1,
       children:0,
       room:1 
    })
    const handleOption = (name,operation)=>{
setOptions(prev=>{return{
    ...prev ,[name]:operation==='i'?options[name]+1:options[name]-1 
} })
    }
 
  
 const handleSearch = ()=>{
   
    dispatch({type:"NEW_SEARCH",payload:{destination,date,options}})
navigate('/hotels',{state:{destination,date,options}})
 }  
 const {user} = useContext(AuthContext);

  return (
    
   

      <div className="header">
        <div className={type==="list"?"headerContainer listMode" :"headerContainer"}>
<div className="headerList">
    <div className="headerListItem active">

    <FontAwesomeIcon icon={faBed} />
    <span>Stays</span>

    </div>
    <div className="headerListItem">

    <FontAwesomeIcon icon={faPlane} />
    <span>Flights</span>

    </div>
    <div className="headerListItem">

    <FontAwesomeIcon icon={faCar} />
    <span>Car Rentals</span>

    </div>
    <div className="headerListItem">

    <FontAwesomeIcon icon={faTaxi} />
    <span>Airport Taxis</span>

    </div>
   
    
</div>
{type !=="list" &&
    <>
<h1 className='headerText'>Welcome</h1>
<p className='headerDesc'>Description</p>
{!user && <button className="headerBtn">Click to Explore</button>}
<div className="headerSearch">
    <div className="headerSearchItem">
    <FontAwesomeIcon icon={faBed} className='headerIcon' />
    <input type='text' placeholder='Where are you going?' className='headerSearchInput' onChange={e=>{setDestination(e.target.value)}}></input>
    </div>
    <div className="headerSearchItem">
    <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
    <span className='headerSearchText' onClick={()=>{setOpenDate(!openDate)}}>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")} `}</span>
   {
    openDate &&  <DateRange   editableDateInputs={true} onChange = {item=>setDate([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={date} className='date' minDate={new Date()}>
      
    </DateRange>
   }
    </div>
    <div className="headerSearchItem">
    <FontAwesomeIcon icon={faPerson} className='headerIcon' />
    <span onClick={()=>{setOpenOptions(!openOptions)}} className='headerSearchText'>{`${options.adult} adults : ${options.children} children : ${options.room} room`}</span>
   {
    openOptions &&  <div className="options">
    <div className="optionItem">
        <span className='optionText'>Adult</span>
        <div className="optionCounter">
        <button  disabled={options.adult<=1} className="optionCounterButton" onClick={()=>{handleOption("adult" , "d")}}>-</button>
        <span className='optionCounterNumber'>{options.adult}</span>
        <button className="optionCounterButton" onClick={()=>{handleOption("adult","i")}}>+</button>
        </div>
    </div>
    <div className="optionItem">
        <span className='optionText'>Children</span>
        <div className="optionCounter">
        <button disabled={options.children<1} className="optionCounterButton" onClick={()=>{handleOption("children","d")}}>-</button>
        <span className='optionCounterNumber'>{options.children}</span>
        <button className="optionCounterButton" onClick={()=>{handleOption("children","i")}}>+</button>
        </div>
    </div>
    <div className="optionItem">
        <span className='optionText'>Rooms</span>
        <div className="optionCounter">
        <button disabled={options.room<=1} className="optionCounterButton" onClick={()=>{handleOption("room","d")}}>-</button>
        <span className='optionCounterNumber'>{options.room}</span>
        <button className="optionCounterButton" onClick={()=>{handleOption("room","i")}}>+</button>
        </div>
    </div>
</div>
   }
    </div>
    <div className="headerSearchItem">
    <button className='headerBtn' onClick={()=>{handleSearch()}}>Search</button>
    </div>
</div>
</>}
</div>

    </div>
    
  )
}

export default Header; 