import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, costForTwo, cuisines} = resData;
  return (
    <div className=" mx-4 p-4 w-[200] h-80 bg-gray-200 hover:bg-green-400 my-4 rounded-md">
      <img
        className="w-40 h-28 rounded-md"
        src={CDN_URL + props.resData.cloudinaryImageId}
      />

      <h3 className="font-bold py-4">{name}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

export default ResturantCard;
