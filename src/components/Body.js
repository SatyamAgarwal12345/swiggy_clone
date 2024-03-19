import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ResturantCard from "./ResturantCard";
import { Link } from "react-router-dom";
import { RESTURANTS_API } from "../utils/constants";

const Body = () => {
  const [listOfResturant, setlistOfResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturant, setFilteredResturant] = useState([]);
  const filteredByRatingDataHnadler = () => {
    setFilteredResturant(
      filteredResturant.filter((res) => res.info.avgRating > 4.3)
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTURANTS_API);
    const json = await data.json();
    console.log(json);
    setlistOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log("hii");
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };
  
  if (listOfResturant.length===0) {
    return <Shimmer />;
  }
  return (
    <div className="my-5">
      <div className=" mb-6">
        <input
          className="border rounded-md border-solid border-black ml-3"
          type="text"
          placeholder=" search resturants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="mx-4 bg-pink-400 rounded-xl px-4 py-0.5"
          onClick={() => {
            setFilteredResturant(
              listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-0.5 rounded-xl bg-green-500"
          onClick={filteredByRatingDataHnadler}
        >
          Highest Rated
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredResturant.map((resturant, index) => (
          <Link to={"/Resturant/" + resturant.info.id} key={index}>
            <ResturantCard resData={resturant.info} key={index} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
