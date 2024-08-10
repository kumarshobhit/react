import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Restaurants_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  // State Variable - super powerful variable
  const [listOfRes, setRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurants_URL);
    const json = await data.json();
    setRes(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    if (listOfRes.length == 0) {
      return <Shimmer />;
    }
  };

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
