import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  // State Variable - super powerful variable
  const { listOfRes, filterRes } = useRestaurants();
  const [searchText, setSearchText] = useState("");
  const onLineStatus = useOnlineStatus();

  if (!onLineStatus) {
    return <h1>Looks that you are offline</h1>;
  }

  if (listOfRes.length == 0) {
    return <Shimmer />;
  }

  //normal state variable
  return (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRes = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRes(filteredRes);
            }}>
            Search button
          </button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            filteredRes = listOfRes.filter((res) => {
              avgRatingNumber = parseFloat(res.info.avgRatingString);
              return avgRatingNumber >= 4;
            });
            setFilterRes(filteredRes);
          }}>
          Top rated restaurants
        </button>
      </div>
      <div className='res-container'>
        {filterRes.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard resObj={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

// to add more restaurants
//   const url = "https://www.swiggy.com/dapi/restaurants/list/update";
//   const config = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       lat: 28.6386438,
//       // lng: 77.07206,
//     },
//   };
//   try {
//     const response = await fetch(url, config);
//     const jsonData = await response.json();
//     console.log(jsonData);
//   } catch (e) {
//     console.log(e);
//   }
// };
