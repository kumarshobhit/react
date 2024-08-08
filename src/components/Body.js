import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import restaurants from "../utils/mockData";

const Body = () => {
  // State Variable - super powerful variable
  const [listOfRes, setRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6386438&lng=77.07206&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRes(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // to add more restaurants

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
          <RestaurantCard key={res.info.id} resObj={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
