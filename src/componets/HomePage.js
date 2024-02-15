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
      <div className=" ">
        <div className="">
          <img
            className=""
            src="./asset/images/uggou.webp"
            alt="backgroundimag"
          />
          <Link to="/sign_in">
            <button
              className=" bg-green-700 py-2 px-8 text-white font-bold rounded-lg absolute top-[75%] left-[50%]"
              type="button"
            >
              Shop now
            </button>
          </Link>
          <div className=" flex items-center justify-center p-10 bg-slate-200 ">
            <div className=" text-2xl">
              Our very new shades of green.
              <br /> Check out our latest sales and offers.75
            </div>
            <div className="ml-20">
              <button
                className=" bg-green-700 px-24 py-2 text-white font-bold rounded-lg "
                type="button"
              >
                {" "}
                View All offers
              </button>
            </div>
          </div>
          <div className=" bg-slate-50 flex justify-evenly p-12 ">
            <div className="flex flex-col">
              <img
                className=" w-40 border rounded-full border-pink-400 p-1"
                src="./asset/images/pl-1.avif"
                alt=""
              />
              <p className=" ml-8 font-bold mt-4 text-lg">Bestsellers</p>
            </div>
            <div>
              <img
                className=" w-40 border rounded-full border-pink-400 p-1"
                src="./asset/images/pl-2.webp"
                alt=""
              />
              <p className=" ml-8 font-bold mt-4 text-lg">Easy to Care</p>
            </div>
            <div>
              <img
                className=" w-40 border rounded-full border-pink-400 p-1"
                src="./asset/images/pl-3.avif"
                alt=""
              />
              <p className=" ml-10 font-bold mt-4 text-lg">XL Plants</p>
            </div>
            <div>
              <img
                className=" w-40 border rounded-full border-pink-400 p-1"
                src="./asset/images/pl-4.webp"
                alt=""
              />
              <p className=" ml-8 font-bold mt-4 text-lg">Ceramic Pots</p>
            </div>
            <div>
              <img
                className=" w-40 border rounded-full border-pink-400 p-1"
                src="./asset/images/pl-5.webp"
                alt=""
              />
              <p className=" ml-8 font-bold mt-4 text-lg">Vegetable Seeds</p>
            </div>
            <div>
              <img
                className=" w-40 border rounded-full border-pink-400 p-1"
                src="./asset/images/pl-6.webp"
                alt=""
              />
              <p className=" ml-12 font-bold mt-4 text-lg">Fertilisers</p>
            </div>
          </div>
          <div className=" flex items-center justify-center p-10 bg-slate-200 ">
            <div className=" text-2xl">
              Spend a day immersed in nature with <br /> Ugaoo Farm Tours!!!{" "}
              <br />
              Registration is now open
            </div>
            <div className="ml-20">
              <button
                className=" bg-green-700 px-24 py-2 text-white font-bold rounded-lg "
                type="button"
              >
                {" "}
                REGISTER NOW
              </button>
            </div>
          </div>
          <div>
            <p
              className=" text-4xl font-medium ml-60 mt-10
            "
            >
              Your Best Picks
            </p>
            <div className="flex justify-evenly px-60 mt-10">
              <div className="w-80  flex flex-col">
                <img
                  className="object-contain w-[100%]"
                  src="./asset/images/plaa-1.webp"
                  alt="plant images"
                />
                <p className=" flex justify-center mt-4 text-xl">
                  Indoor plants
                </p>
              </div>
              <div className="w-80  flex flex-col">
                <img
                  className="object-contain w-[100%]"
                  src="./asset/images/plaa-2.webp"
                  alt="plant images"
                />
                <p className=" flex justify-center mt-4 text-xl">
                  ceramic pots
                </p>
              </div>
              <div className="w-80  flex flex-col">
                <img
                  className="object-contain w-[100%]"
                  src="./asset/images/plaa-3.webp"
                  alt="plant images"
                />
                <p className=" flex justify-center mt-4 text-xl">plant care</p>
              </div>
              <div className="w-80  flex flex-col">
                <img
                  className="object-contain w-[100%]"
                  src="./asset/images/plaa-4.webp"
                  alt="plant images"
                />
                <p className=" flex justify-center mt-4 text-xl">
                  floweing plants
                </p>
              </div>
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
        <img className="mt-5" src="./asset/images/plantbag-2.webp" alt="" />
      </div>
      <CartImage />
      <div className=" bg-slate-200   ">
        <div>
          {" "}
          <p className=" pt-5 font-medium flex justify-center text-4xl">
            Why Uggaoo
          </p>
        </div>
        <div className="flex justify-evenly mt-10 pb-14 ">
          <div className="flex flex-col">
            <img className=" max-w-16 " src="./asset/images/ic-1.avif" alt="" />
            <p className=" text-2xl mt-5 text-center">
              Secure and Recyclable
              <br /> Packaging
            </p>
          </div>
          <div className="flex flex-col ">
            <img className="max-w-16 " src="./asset/images/ic-2.avif" alt="" />
            <p className=" text-2xl mt-5 text-center">
              Free Replacements if <br /> Damaged
            </p>
          </div>
          <div className=" flex flex-col">
            <img className="max-w-16" src="./asset/images/ic-3.avif" alt="" />
            <p className=" text-2xl mt-5 text-center">
              Self-Watering Pots with <br /> Every Plant
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="./asset/images/background3.webp" alt="" />
      </div>
      <PlantSubscription />
      <PlantParent />
      <Footer />
    </div>
  );
}
export default HomePage;
