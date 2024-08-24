import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Menu = () => {
  const { resId } = useParams();
  const res = useRestaurantMenu(resId);

  if (res == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } = res?.cards[2]?.card?.card?.info;
  const { itemCards } =
    res?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} : Rs. {costForTwo / 100}
      </h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
