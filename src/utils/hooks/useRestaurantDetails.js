import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL, RESTAURANT_URL } from "../constants";

const useRestaurantData = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchResDetails = async () => {
      try {
        const response = await fetch(RESTAURANT_URL + resId);
        const jsonData = await response.json();
        setResInfo(jsonData.data);
        // console.log(resInfo, "restaurant-details");
      } catch (error) {
        console.error("error: ", error);
        setResInfo(null);
      }
    };

    fetchResDetails();
  }, []);

  return resInfo;
};

const useAllRestaurantInfo = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(RESTAURANT_LIST_URL);

        const json = await data.json();
        // console.log('res',json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        // Optional Chaining
        setListOfRestraunt(
          json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
      } catch (error) {
        console.error("error: " + error);
        setListOfRestraunt(null);
      }
    };
    fetchData();
  }, []);

  return listOfRestaurants;
};

export { useRestaurantData, useAllRestaurantInfo };
