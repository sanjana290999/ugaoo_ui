import React from "react";
import Navbar from "./Navbar";
import SeedsInformation from "./SeedsInformations";
import { SeedsPointInfo } from "../SeedsInfo";
import Footer from "./Footer";
import SeedsCollections from "./SeedsCollections";
import {
  SeedsCollection,
  SeedsCollection1,
  SeedsCollection2,
} from "./dataFile";

export default function SeedsPage() {
  return (
    <div>
      <Navbar />
      <div>
        <img
          className="w-full mt-12"
          src="./asset/images/seeds_Banner.webp"
          alt="Seeds Banner"
        />
      </div>

      <div className="flex flex-col px-4 md:px-16 lg:px-32 xl:px-64 mt-5">
        <p className="text-3xl md:text-4xl lg:text-5xl">Seeds</p>
        <p className="mt-5 text-base md:text-lg lg:text-xl">
          Growing your own vegetables and herbs at home has never been easier
          and with our extensive range of non-GMO seeds, you can buy any seeds
          online with the guarantee of quality. Explore high germination rate
          seeds and buy seeds online in India for your garden.
        </p>
        <div className="flex flex-col md:flex-row-reverse mt-5">
          <p className="mt-2">230 products</p>
          <button className="px-8 py-2 border-2 border-green-700 mt-4 md:mt-0 md:mr-5">
            SORT BY
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-16 lg:px-32 xl:px-64 mt-5">
        <div className="w-full md:w-1/4 bg-gray-100">
          <ul>
            <li className="p-4 underline text-base font-medium">
              Filter CLEAR ALL
            </li>
            <div className="flex justify-between p-4">
              <li className="underline text-base font-medium">
                Type of Plants
              </li>
              <button className="text-green-700 font-bold text-xl">+</button>
            </div>
            <div className="flex justify-between p-4">
              <li className="underline text-base font-medium">Price</li>
              <button className="text-green-700 font-bold text-xl">+</button>
            </div>
            <div className="flex justify-between p-4">
              <li className="underline text-base font-medium">Light</li>
              <button className="text-green-700 font-bold text-xl">+</button>
            </div>
            <div className="flex justify-between p-4">
              <li className="underline text-base font-medium">
                Ideal plants location
              </li>
              <button className="text-green-700 font-bold text-xl">+</button>
            </div>
            <div className="flex justify-between p-4">
              <li className="underline text-base font-medium">
                Indoor/Outdoor
              </li>
              <button className="text-green-700 font-bold text-xl">+</button>
            </div>
            <div className="flex justify-between p-4">
              <li className="underline text-base font-medium">Maintenance</li>
              <button className="text-green-700 font-bold text-xl">+</button>
            </div>
            <div className="flex justify-between p-4">
              <li className="underline text-base font-medium">Pot Size</li>
              <button className="text-green-700 font-bold text-xl">+</button>
            </div>
            <div className="flex justify-between p-4">
              <li className="underline text-base font-medium">
                Water Schedule
              </li>
              <button className="text-green-700 font-bold text-xl">+</button>
            </div>
            <div className="flex justify-between p-4">
              <li className="underline text-base font-medium">Color</li>
              <button className="text-green-700 font-bold text-xl">+</button>
            </div>
          </ul>
        </div>

        <div className="w-full md:w-3/4">
          <SeedsCollections data={SeedsCollection} showAllButton={false} />
          <SeedsCollections data={SeedsCollection1} showAllButton={false} />
          <SeedsCollections data={SeedsCollection2} showAllButton={false} />
        </div>
      </div>

      <div className="px-4 md:px-16 lg:px-32 xl:px-64">
        {SeedsPointInfo.map((element, i) => (
          <SeedsInformation key={i} element={element} />
        ))}
      </div>

      <div>
        <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border md:my-10 dark:bg-gray-300" />
      </div>

      <Footer />
    </div>
  );
}
