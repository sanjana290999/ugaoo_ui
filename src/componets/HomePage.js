import React from "react";
import Navbar from "./Navbar";
import Plants from "./Plantpage";
import { newArrivalData, BestsellerData, newArrivalData2 } from "./dataFile";
import PlantSubscription from "./PlantSubscription";
import Footer from "./Footer";
import PlantParent from "./PlantParent";
import CartImage from "./CartImg";
import { Link } from "react-router-dom";
import Sign_in from "./Sign_in";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <img
            className="w-full object-cover"
            src="./asset/images/uggou.webp"
            alt="backgroundimage"
          />
          <Link to="/plantcollection">
            <button
              className="bg-green-700 py-2 px-8  text-white font-bold rounded-lg absolute left-[50%]  top-[50%] md:top-[75%] md:left-[50%] transform -translate-x-1/2"
              type="button"
            >
              Shop now
            </button>
          </Link>
          <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-slate-200 text-center">
            <div className="text-2xl mb-4 md:mb-0">
              Our very new shades of green.
              <br /> Check out our latest sales and offers.
            </div>
            <Link to={"seeds"}>
              <div className="md:ml-20">
                <button
                  className="bg-green-700 px-10 py-2 text-white font-bold rounded-lg"
                  type="button"
                >
                  View Seeds
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-slate-50 flex flex-wrap justify-evenly p-6 md:p-12">
            {[
              { src: "pl-1.avif", text: "Bestsellers" },
              { src: "pl-2.webp", text: "Easy to Care" },
              { src: "pl-3.avif", text: "XL Plants" },
              { src: "pl-4.webp", text: "Ceramic Pots" },
              { src: "pl-5.webp", text: "Vegetable Seeds" },
              { src: "pl-6.webp", text: "Fertilisers" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center m-2">
                <img
                  className="w-40 border rounded-full border-pink-400 p-1"
                  src={`./asset/images/${item.src}`}
                  alt=""
                />
                <p className="font-bold mt-4 text-lg text-center">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-slate-200 text-center">
            <div className="text-2xl mb-4 md:mb-0">
              Spend a day immersed in nature with <br /> Ugaoo Farm Tours!!!{" "}
              <br />
              Registration is now open
            </div>
            <div className="md:ml-20">
              <button
                className="bg-green-700 px-10 py-2 text-white font-bold rounded-lg"
                type="button"
              >
                REGISTER NOW
              </button>
            </div>
          </div>
          <div>
            <p className="text-4xl font-medium text-center mt-10">
              Your Best Picks
            </p>
            <div className="flex flex-wrap justify-evenly px-6 md:px-20 mt-10">
              {[
                { src: "plaa-1.webp", text: "Indoor Plants" },
                { src: "plaa-2.webp", text: "Ceramic Pots" },
                { src: "plaa-3.webp", text: "Plant Care" },
                { src: "plaa-4.webp", text: "Flowering Plants" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-80 flex flex-col items-center mb-6"
                >
                  <img
                    className="object-contain w-full"
                    src={`./asset/images/${item.src}`}
                    alt="plant images"
                  />
                  <p className="flex justify-center mt-4 text-xl text-center">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Plants
            name={"Bestseller"}
            data={BestsellerData}
            showAllButton={true}
          />
          <Plants
            name={"New Arrivals"}
            data={newArrivalData}
            showAllButton={false}
          />
          <Plants
            name={"New Arrivals"}
            data={newArrivalData2}
            showAllButton={true}
          />
        </div>
      </div>
      <div>
        <p className="flex justify-center text-4xl font-medium mt-10">
          Shop The Look
        </p>
        <img
          className="mt-5  w-full object-cover"
          src="./asset/images/plantbag-2.webp"
          alt=""
        />
      </div>
      <CartImage />
      <div className="bg-slate-200">
        <div>
          <p className="pt-5 font-medium flex justify-center text-4xl">
            Why Ugaoo
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly mt-10 pb-14">
          {[
            { src: "ic-1.avif", text: "Secure and Recyclable Packaging" },
            { src: "ic-2.avif", text: "Free Replacements if Damaged" },
            { src: "ic-3.avif", text: "Self-Watering Pots with Every Plant" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center m-2">
              <img
                className="max-w-16"
                src={`./asset/images/${item.src}`}
                alt=""
              />
              <p className="text-2xl mt-5 text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          className="w-full object-cover"
          src="./asset/images/background3.webp"
          alt=""
        />
      </div>
      <PlantSubscription />
      <PlantParent />
      <Footer />
    </div>
  );
}

export default HomePage;
