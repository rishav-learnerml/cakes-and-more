import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useAllRestaurantInfo } from "../utils/hooks/useRestaurantDetails";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import offlineImg from "../assets/offline.jpeg";
import withPureVegLabel from "../utils/hocs/withPureVegLabel";

const Body = () => {
  const isUserOffline = useOnlineStatus();

  const VegRestaurantCard = withPureVegLabel(RestaurantCard);

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState(null);
  console.log("body renders");
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  const listOfRestaurants = useAllRestaurantInfo();

  const filterRestaurantList = (searchText) => {
    const filtered = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  useEffect(() => {
    if (!listOfRestaurants) return;
    setFilteredRestaurant(listOfRestaurants);
  }, [listOfRestaurants]);

  if (isUserOffline)
    return (
      <div className="offline-container">
        <h3>Oops! Looks like you're offline!</h3>
        <img src={offlineImg} alt="offline-img" />
      </div>
    );
  return !listOfRestaurants ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-5">
        <div className="flex w-500">
          <input
            type="text"
            className="px-5 py-1 my-5 mx-2 border-2 border-solid rounded-md border-gray-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div className="pl-5 py-6 items-center">
            <button
              className="bg-blue-300 align-middle px-5 py-1 rounded-md"
              onClick={() => filterRestaurantList(searchText)}
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-yellow-300 align-middle rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex justify-around flex-wrap">
        {filteredRestaurant?.map((restaurant) =>
          restaurant.info.veg ? (
            <VegRestaurantCard key={restaurant.info.id} resData={restaurant} />
          ) : (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
