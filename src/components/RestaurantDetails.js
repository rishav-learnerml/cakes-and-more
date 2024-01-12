import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRestaurantData } from "../utils/hooks/useRestaurantDetails";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const resDetails = useRestaurantData(resId);

  if (!resDetails) return <Shimmer />;
  const {
    name,
    city,
    costForTwoMessage,
    locality,
    cuisines,
    avgRating: rating,
    cloudinaryImageId: imageId,
  } = resDetails?.cards?.at(0)?.card?.card?.info;

  const foodItems = resDetails?.cards
    ?.at(2)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.at(9)
    ?.card?.card?.categories?.at(0)?.itemCards;

  return (
    <div className="">
      <h1 className="">{name}</h1>
      <img src={CDN_URL + imageId} alt="restaurant-img"/>
      <p className="">
        {city}-{locality}
      </p>
      <p>{rating} ⭐️</p>
      <p>Cuisines - {costForTwoMessage}</p>
      <p>{cuisines.join(", ")}</p>
      <h2 className="">Menu :</h2>
      <ul>
        {foodItems?foodItems.map((food) => (
          <li key={food?.card?.info?.id}>{food?.card?.info?.name}</li>
        )):"Not available at the moment!"}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
