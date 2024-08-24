import { useEffect, useState } from "react";
import { Restaurants_URL } from "./constants";

const useRestaurants = () => {
  const [listOfRes, setRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

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
  };

  return { listOfRes, filterRes };
};

export default useRestaurants;
