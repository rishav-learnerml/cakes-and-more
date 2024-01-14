import React from "react";
import { CDN_URL } from "../utils/constants";
import { Button } from "@mui/material";

const MenuItemCard = ({ data }) => {
  console.log(data, "menuitem");
  const { name, description, imageId, price, defaultPrice } = data;
  const updatedPrice = price?`₹ ${price/100}`:`₹ ${defaultPrice/100}`
  return (
    <div className="flex justify-between px-3 py-5 border-b border-gray-300">
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-sm">{updatedPrice}</div>
        <div className="text-gray-600 font-thin text-sm pt-3">
          {description}
        </div>
      </div>
      <div className="w-[150px] h-auto border border-transparent rounded-md text-center">
        <img
          src={
            imageId
              ? CDN_URL + imageId
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKPBHcv6IKX64v-lEtAsHO2Rdogrk4vzgqA&usqp=CAU"
          }
          alt="img"
          className="border rounded-md"
        />
        <Button
          variant="outlined"
          sx={{ color: "green", borderColor: "lightgray", background: "#fff"}}
          className="absolute bottom-7"
        >
          ADD
        </Button>
      </div>
    </div>
  );
};

export default MenuItemCard;
