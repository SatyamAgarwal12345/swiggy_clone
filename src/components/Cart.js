import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/store/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    //dispatch an action of adding item
    dispatch(clearCart());
  };
  
  return (
    <div className="px-[400px]">
      <div className="text-center m-2  ">
        <h1 className="text-lg font-bold">Cart</h1>
        <button
          className="bg-slate-600 px-2 py-1 rounded-lg text-cyan-100"
          onClick={clearCartHandler}
        >
          CLAER
        </button>
        {cartItem.length===0 && <h1 className="text-2xl font-bold mt-2">Your Cart Item is Empty</h1>}
      </div>

      {cartItem.map((item) => (
        <div className="justify-between text-center m-2 p-4 flex bg-gray-400">
          <div className="font-bold text-xl">
            <div>{item.info.name}</div>
            <div className="text-yellow-500 ">
              PRICE-{item.info.price / 100}
            </div>
          </div>

          <div className="my-50 ">
            <img className="w-16  " src={CDN_URL + item.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
