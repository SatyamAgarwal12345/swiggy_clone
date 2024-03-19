import { RESTURANTS_API } from "../constants";
import { useState, useEffect } from "react";

const useResturants = () => {
  const [listOfResturant, setlistOfResturant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      RESTURANTS_API
    );
    const json = await data.json();
    setlistOfResturant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfResturant;
};

export default useResturants;
