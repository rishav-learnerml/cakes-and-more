import React from "react";

const OfferCard = ({ offer }) => {
  const { offerTag, couponCode, description, header } = offer;
  return (
    <div className="border rounded-md border-gray-400 flex py-3 px-2 mr-5 min-w-[250px]">
      {/* {offerTag && (
        <div className="border-r border-gray-300 text-red-500 transform rotate-[270deg]">
          <span className="text-xs">{offerTag}</span>
        </div>
      )} */}
      <div className="flex flex-col">
        <div className="flex">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"
            alt=""
          />
          <span className="pl-2 text-md font-semibold">{header}</span>
        </div>
        <div className="flex mt-1">
          <span className="text-xs text-gray-500">{couponCode} | </span>
          <span className="text-xs text-gray-500"> {description}</span>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
