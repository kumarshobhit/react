import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable - super powerful variable
  const [listOfRes, setRes] = useState(restaurants);

  //normal state variable
  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            filteredRes = listOfRes.filter((res) => {
              avgRatingNumber = parseFloat(res.info.avgRatingString);
              return avgRatingNumber >= 4;
            });
            setRes(filteredRes);
          }}>
          Top rated restaurants
        </button>
      </div>
      <div className='res-container'>
        {listOfRes.map((res) => (
          <RestaurantCard key={res.info.id} resObj={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
