import React from "react";
export default function PlantParent() {
  return (
    <div>
      <div className="flex p-20 ml-20 ">
        <div className=" flex justify-center flex-col w-[50%] ml-48">
          <p className="text-2xl font-medium ">
            Join our Plant Parent Rewards Club
          </p>
          <p className="mt-10 text-cnter text-xl">
            Every plant purchase is a gift that keeps on giving. Earn <br />{" "}
            coins and redeem them for exclusive discounts.
          </p>
          <div className="felx ">
            <button className=" bg-green-600 px-16 py-2  rounded-sm mt-5 text-white">
              {" "}
              LEARN MORE
            </button>
            <button className=" bg-green-600  px-16 ml-4 py-2   rounded-lg mt-5 text-white">
              {" "}
              REFER & FRIEND
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <img className="w-2/3" src="./asset/images/ppc-2.webp" alt="" />
        </div>
      </div>
    </div>
  );
}
