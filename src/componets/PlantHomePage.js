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
          className="w-full mt-12"
          src="./asset/images/plant-1.webp"
          alt=""
        />
      </div>

      <div className="flex flex-col mx-5 md:mx-20 lg:mx-40 xl:mx-80 mt-5">
        <p className="text-3xl md:text-4xl lg:text-5xl">Plants</p>
        <p className="mt-5 text-base md:text-lg lg:text-xl">
          Welcome to our online nursery, where you can find a wide variety of
          natural plants available for purchase. We specialize in providing a
          seamless plant online shopping experience, making it convenient for
          you to buy plants online and have them delivered right to your
          doorstep.{" "}
        </p>
        <div className="flex flex-col md:flex-row-reverse mt-5">
          <p className="mt-2">230 products</p>
          <button className="px-10 md:px-24 py-2 border-2 border-green-700 mr-5">
            SORT BY
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mx-5 md:mx-20 lg:mx-40 xl:mx-80 mt-5">
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 lg:p-8">
          <ul>
            {[
              "Filter CLEAR ALL",
              "Type of Plants",
              "Price",
              "Light",
              "Ideal plants location",
              "Indoor/Outdoor",
              "Maintenance",
              "Pot Size",
              "Water Schedule",
              "Color",
            ].map((item, index) => (
              <div
                className="flex justify-between items-center p-2 lg:p-4"
                key={index}
              >
                <li className="underline text-base font-medium">{item}</li>
                <button className="hover:border-green-700 text-green-700 font-bold text-xl text-center">
                  +
                </button>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-3/4 mt-5 lg:mt-0">
          <PlantCollectionData data={PlantCollection} showAllButton={true} />
          <PlantCollectionData data={PlantCollection1} showAllButton={true} />
          <PlantCollectionData data={PlantCollection2} showAllButton={true} />
        </div>
      </div>

      {pointInfo.map((element, index) => (
        <PlantInformation key={index} element={element} />
      ))}

      <div>
        <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border md:my-10 dark:bg-gray-300" />
      </div>

      <Footer />
    </div>
  );
}
