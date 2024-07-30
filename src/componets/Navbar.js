import React from "react";
import { NavbarData } from "./NavbarData";
import NavComponent from "./NavComponent";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

function Navbar() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-around bg-green-900 p-3 mt-2 text-center md:text-left">
        <div className="text-white">Farm Visit Registration | Register Now</div>
        <div className="text-white">
          Free Shipping above ₹499 | All Free Shipping above ₹499 | All India
          Delivery
        </div>
        <div className="text-white">Call: +91-9129-9129-91</div>
      </div>
      <div className="bg-slate-200 flex flex-col md:flex-row items-center p-2">
        <div className="w-full md:w-[20%] flex justify-center md:justify-start">
          <img
            className="w-32 ml-0 md:ml-20"
            src="./asset/images/greenlogo.png"
            alt="xyz"
          />
        </div>
        <div className="w-full md:w-[40%] flex   justify-between md:justify-between  mt-5 font-bold text-green-800 hover:cursor-pointer ">
          {NavbarData.map((element, index) => (
            <NavComponent key={index} element={element} />
          ))}
        </div>
        <div className="w-full md:w-[40%] flex justify-center md:justify-end mt-3 md:mt-0">
          <input
            className="ml-0 md:ml-24 px-10 rounded-2xl "
            type="text"
            placeholder="search"
          />
          <FaUser className="w-10 h-5 mt-4 ml-2" />
          <FaIndianRupeeSign className="w-10 h-5 mt-4" />
          <FaCartPlus className="w-10 h-5 mt-4" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
