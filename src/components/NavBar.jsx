import React from "react";
import { Link } from "react-router-dom";
// import { CiShoppingCart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assests/images/market logo.jpeg'
// import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function NavBar() {
    const cartItems=useSelector((store)=>store.cart);
    const wishList=useSelector((store)=>store.wishList);
  return (
    <div className="fixed prevent-select  border border-x-0 border-t-0 border-zinc-400 z-50 left-0 right-0 bg-white text-black w-screen items-center flex justify-center shadow-md">
      <div className="w-full flex px-4 py-1 md:py-0 justify-between md:max-w-[90%]">
        <div>
          <Link to="/">
          <img className="w-24 h-20  md:w-20" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex text-xl text-green-500 items-center lg:text-3xl gap-2 "> One Stop Destination !</div>

        <div className=" flex items-center gap-2 md:gap-5">
            <Link className="relative px-1 py-1" to="/wishlist">
            <FaHeart className="text-red-500" size={30}/>
            <div className="absolute  font-bold -top-[8px] -right-1">{wishList.length}</div>
            </Link>
            <Link className="relative px-1 py-1" to="/cart">
            <FaShoppingCart size={30} />
            <div className="absolute text-red-700 font-bold -top-[10px] -right-1">{cartItems.length}</div>
            </Link>
        </div>
      </div>
    </div>
  );
}
