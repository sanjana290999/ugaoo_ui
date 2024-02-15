import React from "react";
import { NavbarData } from "./NavbarData";
import NavComponent from "./NavComponent";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
function Navbar() {
  // const ShowOnClick = () => {};

  return (
    <div>
      <div className="flex items-center justify-around bg-green-900 p-3 mt-2">
        <div className=" text-white">
          Farm Visit Registration | Register Now
        </div>
        <div className="text-white">
          Free Shipping above ₹499 | All India Delivery
        </div>
        <div className="text-white">Call: +91-9129-9129-91</div>
      </div>
      <div className="bg-slate-200 flex p-2">
        <div className="w-[20%]">
          <img
            className="w-32 ml-20"
            src="./asset/images/greenlogo.png"
            alt="xyz"
          />
        </div>
        <div className="w-[40%] flex justify-between mt-5 font-bold text-green-800 hover:cursor-pointer">
          {NavbarData.map((element) => (
            <NavComponent element={element} />
          ))}
          {/* <div>
            <p>SEEDS</p>
          </div>
          <div>
            <p>POTS & PLANTERS</p>
          </div>
          <div>
            <p>PLANT CARE</p>
          </div>
          <div>
            <p> GIFTING</p>
          </div>
          <div>
            <p> BLOG</p>
          </div>
          <div>
            <p> OFFERSs</p>
          </div> */}
        </div>
        <div className="w-[40%] flex">
          <input
            className=" ml-24 px-10 my-3 rounded-2xl "
            type="text"
            placeholder="search"
          />
          <FaUser className="w-10 h-5 mt-4  ml-2 " />
          <FaIndianRupeeSign className="w-10 h-5 mt-4 " />
          <FaCartPlus className="w-10 h-5 mt-4 " />
        </div>

        {/* <div className="w-[10%]  flex">
          <FaUser className="w-10 h-5 mt-3 " />
          <FaIndianRupeeSign className="w-10 h-5 mt-3 " />
          <FaCartPlus className="w-10 h-5 mt-3 " />
        </div> */}
      </div>
    </div>
  );
}
export default Navbar;
