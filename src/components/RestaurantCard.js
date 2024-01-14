import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    id: resId,
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  const ratingColor =
    avgRating >= 4
      ? "green"
      : avgRating >= 3
      ? "orange"
      : avgRating >= 2
      ? "yellow"
      : "red";

  return (
    <Link to={"/restaurant/" + resId} className="">
      <div className="m-4 p-4 w-[300px] bg-gray-100 hover:bg-gray-200 rounded-lg">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold text-lg py-4">{name}</h3>
        <h4 className="text-sm text-gray-700">
          {cuisines.slice(0, 3).join(", ")}
          <span className="text-blue-600">
            {cuisines.length - 3 > 0 && ` +${cuisines.length - 3}`}
          </span>
        </h4>
        <div className="flex my-3 justify-between">
          <span
            className={`text-sm text-black bg-${ratingColor}-600 p-1 rounded-lg`}
          >
            {avgRating} ⭐️
          </span>
          <span>﹒</span>
          <span className="text-sm text-gray-700 font-semibold">{costForTwo}</span>
          <span>﹒</span>
          <span className="text-sm text-gray-700">{sla?.slaString}</span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
