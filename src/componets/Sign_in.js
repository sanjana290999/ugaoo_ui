import React from "react";
import { MdCancel } from "react-icons/md";
export default function Sign_in() {
  return (
    <div>
      <div className=" flex flex-col  items-center mt-32 border border-gray-300 rounded-xl shadow-lg  mx-[38%] py-14 bg-white ">
        <div className=" ml-72 ">
          <MdCancel className="w-5 h-5" />
        </div>
        <img className=" mb-10" src="./asset/images/greenlogo.png" alt="" />
        <div className="flex mb-5">
          <button className="bg-blue-800 px-10 py-3  text-lg rounded-md text-white  ">
            facebook
          </button>
          <button className="bg-red-600  py-3 text-lg px-10 rounded-md ml-2 text-white  ">
            Google
          </button>
        </div>
        <label className="p-2 text-lg  ">
          {" "}
          Email :
          <input
            className=" ml-4 rounded-md border border-gray-200 py-2 pl-2 pr-20 "
            type="text"
            id="eamil"
            placeholder="enter the email"
          />
        </label>

        <label className="p-2 text-lg">
          Password :
          <input
            className=" ml-4 rounded-md border border-gray-200 py-2 pl-2 pr-14 "
            type="text"
            id="password"
            placeholder="enter password"
          />
        </label>

        <button className="ml-56 mt-3 font-medium text-lg">
          Forget password ?
        </button>
        <div>
          <button className="bg-green-700 text-white text-xl py-3 px-36 mt-5 rounded-lg">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
