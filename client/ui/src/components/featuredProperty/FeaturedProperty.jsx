import './featuredproperty.css';
import { useFetch } from '../../hooks/useFetch';

export const FeaturedProperty = () => {
  const { data, loading, error } = useFetch('/hotels?featured=true');

  return (
    <div className='fp'>
      {loading ? (
        "Loading Please Wait"
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : data.length > 0 ? (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photo[0]} alt="" className="fpImg" />
              <span className="fpName">
                {item.name}
              </span>
              <span className="fpCity">
                {item.city}
              </span>
              <span className="fpPrice">
                {item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <p>No Featured Properties Found</p>
      )}
    </div>
  );
};