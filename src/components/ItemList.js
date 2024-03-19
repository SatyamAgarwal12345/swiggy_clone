import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const addItemsHandler = (item)=>{
    //dispatch an action of adding item
      dispatch(addItem(item.card))
  }
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex p-2 m-2  border-gray-200 border-b-2 text-left justify-between"
        >
          <div className="w-9/12">
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>PRICE - {item.card.info.price / 100}</span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-1 bg-black text-white shadow-lg rounded-lg mx-16 my-16" onClick={()=>addItemsHandler(item)}>Add +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
