import React from "react";

export default function PlantParent() {
  return (
    <div className="px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center p-4 md:p-20">
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start mb-10 md:mb-0">
          <p className="text-2xl font-medium text-center md:text-left">
            Join our Plant Parent Rewards Club
          </p>
          <p className="mt-10 text-center md:text-left text-xl">
            Every plant purchase is a gift that keeps on giving. Earn coins and
            redeem them for exclusive discounts.
          </p>
          <div className="flex flex-col md:flex-row mt-5">
            <button className="bg-green-600 px-16 py-2 rounded-sm text-white mb-4 md:mb-0 md:mr-4">
              LEARN MORE
            </button>
            <button className="bg-green-600 px-16 py-2 rounded-lg text-white">
              REFER A FRIEND
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center">
          <img
            className="w-2/3 md:w-full"
            src="./asset/images/ppc-2.webp"
            alt="Plant Parent Club"
          />
        </div>
      </div>
    </div>
  );
}
