import React from "react";
import Navbar from "./Navbar";
import PlantInformation from "./PlantInfo";
import { pointInfo } from "./PlantInfoData";
import Footer from "./Footer";
import PlantCollectionData from "./PlantCollectionData";
import {
  PlantCollection,
  PlantCollection1,
  PlantCollection2,
} from "./dataFile";
export default function PlantHomePage() {
  return (
    <div>
      <Navbar />
      <div>
        <img
          className="w-[100%] mt-12"
          src="./asset/images/plant-1.webp"
          alt=""
        />
      </div>

      <div className="flex flex-col mx-80 mt-5">
        <p className="text-5xl">Plants</p>
        <p className="mt-5 text-xl">
          Welcome to our online nursery, where you can find a wide variety of
          natural plants available for purchase. We specialize in providing a
          seamless plant online shopping experience, making it convenient for
          you to buy plants online and have them delivered right to your
          doorstep.{" "}
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
          <PlantCollectionData data={PlantCollection} showAllButton={true} />
          <PlantCollectionData data={PlantCollection1} showAllButton={true} />
          <PlantCollectionData data={PlantCollection2} showAllButton={true} />
        </div>
      </div>
      {pointInfo.map((element) => (
        <PlantInformation element={element} />
      ))}
      <div>
        <hr class="w-[100%] h-1 mx-auto my-4 bg-gray-100 border  md:my-10 dark:bg-gray-300"></hr>
      </div>
      <Footer />
    </div>
  );
}
