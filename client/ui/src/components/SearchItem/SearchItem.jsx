import './searchItem.css' ; 
import {Link, useNavigate } from 'react-router-dom';
export const SearchItem = ({item}) => {
  const navigate = useNavigate();
  const handleSearchItem = ()=>{
    navigate('/hotels/list')
     }   
  return (
    <div className='searchItem'>
        <img src={item.photo[0]} alt="" className="searchItemImg" />
        <div className="siDesc">
           <h1 className="siTitle">{item.name}</h1>
           <span className="siDistance">{item.distance}  m away from airport</span>
           <span className="siTaxiOp">Free Airport Taxi</span>
           <span className="siSubtitle">Studi Aprtment with Air Conditioning</span>
           <span className="siFeatures">{item.desc}</span> 
           <span className="siCancel">Free Cancelation</span>
           <span className="siCancelSubtitle">You can c ancel later,so lock in the dreat proce today!</span>
        </div>
        <div className="details">

            {item.rating && <div className="rating">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>}
            <div className="price">
                <span className="siPrice">{item.cheapestPrice}</span>
                <span className="taxes">Include tasex and fees</span>
                <Link to={`/hotels/${item._id}`}>
                <button className='check'>See availability</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}
