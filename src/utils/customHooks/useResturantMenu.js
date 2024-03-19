import { MENU_API } from "../constants";
import { useState, useEffect } from "react";
const useResturantMenu = (resId) => {
  const [restMenu, setRestMenu] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId.path);
    const json = await data.json();
    setRestMenu(json.data.cards);
  };
  return restMenu;
};

export default useResturantMenu;
