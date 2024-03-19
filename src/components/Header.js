import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../utils/imgs/logo.png";
import { useSelector } from "react-redux";
import cart from "../utils/imgs/cart.png";


const Header = () => {
  const [btnName, setbtnName] = useState("login");
  // subscrbing to appStore
  const cartItem = useSelector((store) => store.cart.items);
 
  return (
    <div className="flex justify-between bg-pink-200">
      <div className="w-32">
        <img src={logo} />
      </div>
      <div>
        <ul className="flex justify-between m-6">
          <li className="px-5 py-2">
            <Link to="/">home</Link>
          </li>
          <li className="px-5 py-2 ">
            <Link to="/about">about</Link>
          </li>
          <li className="px-5 py-2">
            <Link to="/contact">contactus</Link>
          </li>
          <li className="ml-5  py-2  ">
            <Link to='/cart'><img className="w-8" src={cart}></img></Link>
          </li>
          <li className="mr-5 py-2 font-bold text-lg  ">
            ({cartItem.length}-items)
          </li>

          <button
            className="btn  mb-3"
            onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
