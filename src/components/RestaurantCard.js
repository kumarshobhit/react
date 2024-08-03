import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cloudinaryImageId, cuisines, avgRating } = resObj?.info;
  const { deliveryTime } = resObj?.info?.sla;
  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src={CDN_URL + cloudinaryImageId}
        alt='restaurant-logo'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars </h4>
      <h4>{deliveryTime} mins </h4>
    </div>
  );
};

export default RestaurantCard;
