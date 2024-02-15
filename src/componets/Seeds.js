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
          className="w-[100%] mt-12"
          src="./asset/images/seeds_Banner.webp"
          alt=""
        />
      </div>

      <div className="flex flex-col mx-80 mt-5">
        <p className="text-5xl">Seeds</p>
        <p className="mt-5 text-xl">
          Growing your own vegetables and herbs at home has never been easier
          and with our extensive range of non-GMO seeds, you can buy any seeds
          online with the guarantee of quality. Explore high germination rate
          seeds and buy seeds online in India for your garden.
        </p>
        <div className="flex flex-row-reverse mt-5">
          <p className="mt-2">230 product</p>
          <button className=" px-24 py-2 border-2 border-green-700 mr-5 ">
            SORT BY
          </button>
        </div>
      </div>
      <div className=" flex mx-80 mt-5 ">
        <div className="w-[25%] bg-gray-100 h-[25%]">
          <ul>
            <div className="flex">
              <li
                className=" p-4 underline
             text-base font-medium"
              >
                Filter CLEAR ALL
              </li>
            </div>
            <div className="flex ">
              <li
                className=" p-4 underline
             text-base font-medium"
              >
                Type of Plants
              </li>
              <button className=" ml-36 hover:border-green-700    text-green-700 font-bold text-xl text-center ">
                +
              </button>
            </div>
            <div className="flex">
              <li
                className=" p-4 underline
             text-base font-medium"
              >
                {" "}
                Price
              </li>
              <button className=" ml-52 hover:border-green-700    text-green-700 font-bold text-xl text-center ">
                +
              </button>
            </div>
            <div className="flex">
              <li
                className=" p-4 underline
             text-base font-medium"
              >
                Light
              </li>
              <button className=" ml-52 hover:border-green-700    text-green-700 font-bold text-xl text-center ">
                +
              </button>
            </div>
            <div className="flex">
              <li
                className=" p-4 underline
             text-base font-medium"
              >
                Ideal plants location
              </li>
              <button className=" ml-24 hover:border-green-700    text-green-700 font-bold text-xl text-center ">
                +
              </button>
            </div>
            <div className="flex">
              <li
                className=" p-4 underline
             text-base font-medium"
              >
                Indoor/Outdoor
              </li>
              <button className=" ml-24 hover:border-green-700    text-green-700 font-bold text-xl text-center ">
                +
              </button>
            </div>
            <div className="flex">
              <li
                className=" p-4 underline
             text-base font-medium"
              >
                {" "}
                Maintenance
              </li>
              <button className=" ml-36 hover:border-green-700    text-green-700 font-bold text-xl text-center ">
                +
              </button>
            </div>
            <div className="flex">
              <li
                className=" p-4 underline
             text-base font-medium"
              >
                {" "}
                Pot Size
              </li>
              <button className=" ml-36 hover:border-green-700    text-green-700 font-bold text-xl text-center ">
                +
              </button>
            </div>
            <div className="flex">
              <li
                className=" p-4 underline
             text-base font-medium"
              >
                {" "}
                Water Schedule
              </li>
              <button className=" ml-36 hover:border-green-700    text-green-700 font-bold text-xl text-center ">
                +
              </button>
            </div>
            <div className="flex">
              <li
                className=" p-4 underline
             text-base font-medium"
              >
                Color
              </li>
              <button className=" ml-36 hover:border-green-700    text-green-700 font-bold text-xl text-center ">
                +
              </button>
            </div>
          </ul>
        </div>
        <div className="w-[75%]  ">
          <SeedsCollections data={SeedsCollection} showAllButton={false} />
          <SeedsCollections data={SeedsCollection1} showAllButton={false} />
          <SeedsCollections data={SeedsCollection2} showAllButton={false} />
        </div>
      </div>
      <div>
        {SeedsPointInfo.map((element, i) => (
          <SeedsInformation key={i} element={element} />
        ))}
      </div>
      <div>
        <hr class="w-[100%] h-1 mx-auto my-4 bg-gray-100 border  md:my-10 dark:bg-gray-300"></hr>
      </div>
      <Footer />
    </div>
  );
}
