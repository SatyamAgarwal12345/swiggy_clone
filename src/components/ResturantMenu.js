import React from "react";
import useResturantMenu from "../utils/customHooks/useResturantMenu";
import { useParams } from "react-router-dom";
import ResturantCategory from "./ResturantCategory";
const ResturantMenu = () => {
  const resId = useParams();
  const restMenu = useResturantMenu(resId);
  console.log(restMenu);
  if (!restMenu) {
    return <h1>Wait We Are Still Fetching....</h1>;
  }

  const items =
    restMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  const catogeries =
    restMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  if (!items) {
    return <h1>Wait We Are Still Fetching....</h1>;
  }
  return (
    <div className="text-center">
      <h1>MENUS</h1>
      {catogeries.map((catogery, index) => (
        <ResturantCategory key={index} data={catogery.card.card} />
      ))}
    </div>
  );
};

export default ResturantMenu;
