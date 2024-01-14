import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRestaurantData } from "../utils/hooks/useRestaurantDetails";
import infoImg from "../assets/info.avif";
import duration from "../assets/duration.svg";
import rupee from "../assets/rupee.svg";
import OfferCard from "./OfferCard";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const resDetails = useRestaurantData(resId);

  if (!resDetails) return <Shimmer />;
  const {
    name,
    city,
    costForTwoMessage,
    areaName,
    cuisines,
    avgRating: rating,
    cloudinaryImageId: imageId,
    totalRatingsString,
    availabilityServiceabilityMessage: time,
  } = resDetails?.cards?.at(0)?.card?.card?.info;

  const distanceFromCurrentLocation =
    resDetails?.cards?.at(0)?.card?.card?.info?.sla?.lastMileTravelString;
  const deliveryMessage =
    resDetails?.cards?.at(0)?.card?.card?.info?.orderabilityCommunication
      ?.message?.text;

  const offers =
    resDetails?.cards?.at(1)?.card?.card?.gridElements?.infoWithStyle?.offers;

  const ratingTextColor =
    rating >= 4
      ? "green"
      : rating >= 3
      ? "yellow"
      : rating >= 2
      ? "orange"
      : "red";

  const categories =
    resDetails?.cards?.at(2)?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c?.card?.card?.['@type']?.toLowerCase().includes('itemcategory'));

  console.log(categories,'categories')

  return (
    <div className="w-[60%] mx-auto my-10">
      <div className="header-elements border-b border-dashed border-b-gray-300 flex justify-between">
        <div className="res-header-details">
          <div className="flex">
            <div className="res-image">
              <img
                src={CDN_URL + imageId}
                alt="restaurant-img"
                className="w-20 h-20 border border-transparent rounded-md"
              />
            </div>
            <div className="res-details pl-5">
              <h1 className="text-2xl font-semibold">{name}</h1>
              <p className="text-gray-500 text-sm font-light">
                {cuisines.join(", ")}
              </p>
              <p className="text-gray-500 text-sm font-light">
                {areaName}, {distanceFromCurrentLocation}
              </p>
            </div>
          </div>

          <span className="my-5 text-gray-500 text-sm font-light flex">
            <img src={infoImg} alt="ifo" />
            <span className="ps-2">{deliveryMessage}</span>
          </span>
        </div>
        <div className="res-header-rating border border-gray-300 rounded-md h-[30%]">
          <div className="rating-box">
            <div className="rating border-b border-gray-300 p-3 text-center">
              <span className={`${ratingTextColor} font-bold pr-1`}>
                {rating}
              </span>
              ⭐️
            </div>
            <div className="rated-users text-gray-500 text-xs p-3 font-medium">
              {totalRatingsString}
            </div>
          </div>
        </div>
      </div>
      <div className="more-details flex my-5">
        <div className="duration flex mr-5">
          <img src={duration} alt="" className="pr-3" />
          <span className="text-md font-bold">{time}</span>
        </div>
        <div className="rupee flex">
          <img src={rupee} alt="" className="pr-3" />
          <span className="text-md font-bold">{costForTwoMessage}</span>
        </div>
      </div>
      <div className="offers flex overflow-auto justify-between pb-10 border-b border-gray-300">
        {offers?.map((offer) => (
          <OfferCard offer={offer.info} key={offer?.info?.description}/>
        ))}
      </div>

      <ul>
        {categories
          ? categories?.map((category) => (
              <RestaurantMenuItem data={category} key={category?.card?.card?.title}/>
            ))
          : "Not available at the moment!"}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
