import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const ResturantCategory = ({ data }) => {
  const [showItems,setShowItems] = useState(false)
  const clickHandler = ()=>{
    setShowItems(!showItems);
  }

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 cursor-pointer bg-gray-50 shadow-lg p-4 " >
        <div className="flex justify-between" onClick={clickHandler}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>click to open ⬇️</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
        
      </div>
    </div>
  );
};

export default ResturantCategory;
