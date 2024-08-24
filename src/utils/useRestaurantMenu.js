import { useEffect, useState } from "react";
import { Menu_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setRes] = useState(null);
  //fetchData
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_URL + resId);

    const json = await data.json();
    setRes(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
