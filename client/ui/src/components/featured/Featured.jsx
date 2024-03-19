import {useFetch} from "../../hooks/useFetch";
import "./featured.css";
const Featured = ()=>{
    const {data,loading,error} = useFetch("/hotels/countbycity?cities=Delhi,madrid,london")
  
    return (

        <div className="featured">
          {loading ? ("Loading Please Wait") 
          :(<><div className="featuredItem">
            <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400" className="featuredImage"></img>
            <div className="featuredTitles">
                <h1>City</h1>
                <h2>{data[0]}</h2>
            </div>
           </div>
           <div className="featuredItem">
            <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400" className="featuredImage"></img>
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[1]}</h2>
            </div>
           </div>
           <div className="featuredItem">
            <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400" className="featuredImage"></img>
            <div className="featuredTitles">
                <h1>Goa</h1>
                <h2>{data[2]}</h2>
            </div>
           </div> </>)}
        </div>
    )
}
export default Featured;