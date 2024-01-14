import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItemCard from "./MenuItemCard";

const RestaurantMenuItem = ({ data }) => {
  //base case
  if (data === null) return;

  const title = data?.title || data?.card?.card?.title;
  const menuItems = data?.itemCards || data?.card?.card?.itemCards;
  const menuSubItems = data?.card?.card?.categories;

  return (
    <div className="my-3">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-lg font-bold"
        >
          {title} {menuItems && `(${menuItems?.length})`}
        </AccordionSummary>
        <AccordionDetails>
          {menuSubItems
            ? menuSubItems?.map((menuItem, index) => (
                <RestaurantMenuItem data={menuItem} key={index} />
              ))
            : menuItems?.map((menuItem, index) => (
                <MenuItemCard data={menuItem?.card?.info} key={index} />
              ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RestaurantMenuItem;
