import './property.css' ; 
import {useFetch} from '../../hooks/useFetch';
const PropertyList=()=>{
    const {data,loading,error} = useFetch("/hotels/countbytype")
   
    const images = ["https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=900&t=st=1709556304~exp=1709556904~hmac=1a41e21cf55b278e279d31794829db4df6790856a99722971860c865a411cb94","https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=900&t=st=1709556304~exp=1709556904~hmac=1a41e21cf55b278e279d31794829db4df6790856a99722971860c865a411cb94","https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=900&t=st=1709556304~exp=1709556904~hmac=1a41e21cf55b278e279d31794829db4df6790856a99722971860c865a411cb94","https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=900&t=st=1709556304~exp=1709556904~hmac=1a41e21cf55b278e279d31794829db4df6790856a99722971860c865a411cb94","https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=900&t=st=1709556304~exp=1709556904~hmac=1a41e21cf55b278e279d31794829db4df6790856a99722971860c865a411cb94",
        
    ]
    if (loading) return <div>Loading please wait...</div>;
    return (
        <div className="pList">
        {data && data.length > 0 ? (
            data.map((item, index) => (
                <div className="pListItem" key={index}>
                    <img src={images[index % images.length]} alt="" className="pListImg" />
                    <div className="pListTiles">
                        <h1>{item.type}</h1>
                        <h2>{item.count} {item.type}</h2>
                    </div>
                </div>
            ))
        ) : (
            <div>No data available</div>
        )}
    </div>
    )
}
export default PropertyList ;