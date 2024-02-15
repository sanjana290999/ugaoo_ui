import React from "react";
export default function CartImage() {
  return (
    <div className="flex">
      <div class="w-[50%] flex justify-end m-16">
        <img
          class=" w-4/5 h-[100%]"
          src="./asset/images/cartimg.webp"
          alt="kdsdnksl"
        />
      </div>
      <div className="w-[40%]">
        <div className="flex flex-col my-16 ">
          <p className="text-2xl font-medium"> Deal Of The Week</p>
          <p className="text-3xl mt-2  text-green-800 font-bold">
            Jade Plant Mini
          </p>
          <div className="flex">
            <p className=" justify-start mt-4 text-2xl  text-green-800">
              <s className="text-sm mt-3">₹299 </s> &nbsp; ₹249{" "}
            </p>
            <p className=" bg-yellow-400 text-xs mt-4 px-3 pt-2 ml-3">SALE</p>
          </div>
          <p className="mt-4 text-lg">Select Plant Size</p>
          <div className="flex">
            <button className="py-2 px-5 mt-2 border-2 hover:border-green-700  border-black rounded-md  text-green-700 ">
              small
            </button>
            <button className="py-2 px-5 mt-2 border-2 ml-2  hover:border-green-700 border-black rounded-md   text-green-700">
              medium
            </button>
          </div>
          <p className="mt-4 text-lg">Select Planter</p>
          <div>
            <button className="py-2 px-5 mt-2 border-2  hover:border-green-700  border-black rounded-md  text-green-700 ">
              Gropot
            </button>
            <button className="py-2 px-5 mt-2 border-2 ml-2 hover:border-green-700  border-black rounded-md  text-green-700 ">
              Krish
            </button>
            <button className="py-2 px-5 mt-2 border-2 ml-2 hover:border-green-700  border-black rounded-md  text-green-700 ">
              Atlantis
            </button>
            <button className="py-2 px-5 mt-2 border-2 ml-2 hover:border-green-700  border-black rounded-md  text-green-700 ">
              Logos
            </button>
            <button className="py-2 px-5 mt-2 border-2 ml-2 hover:border-green-700  border-black rounded-md  text-green-700 ">
              Dimond
            </button>
            <button className="py-2 px-5 mt-2 border-2 ml-2 hover:border-green-700  border-black rounded-md  text-green-700 ">
              Spiro
            </button>
          </div>
          <p className="text-lg mt-2">color</p>
          <div>
            <button className="w-10 h-10 border-2    hover:border-green-700  border-black rounded-full  text-green-700 ">
              Sp
            </button>
            <button className="w-10 h-10 border-2 ml-2 hover:border-green-700  border-black rounded-full  text-green-700 ">
              Sp
            </button>
            <button className="w-10 h-10 border-2 ml-2 hover:border-green-700  border-black rounded-full  text-green-700 ">
              Sp
            </button>
            <button className="w-10 h-10 border-2 ml-2  hover:border-green-700  border-black rounded-full  text-green-700 ">
              Sp
            </button>
            <button className="w-10 h-10 border-2 ml-2  hover:border-green-700  border-black rounded-full  text-green-700 ">
              Sp
            </button>
            <button className="w-10 h-10 border-2 ml-2 hover:border-green-700  border-black rounded-full  text-green-700 ">
              Sp
            </button>
          </div>
          <div className="flex mt-5">
            <button className="w-8 h-8 bg-gray-200 border ml-2 hover:border-green-700  border-black rounded-full  text-green-700 font-bold text-lg text-center ">
              +
            </button>
            <button className="w-8 h-8  bg-gray-200 border ml-20 hover:border-green-700  border-black rounded-full font-bold text-green-700 text-lg  text-center">
              -
            </button>
            <button
              className=" bg-green-700 ml-2 px-24 py-2 text-white font-bold rounded-sm "
              type="button"
            >
              {" "}
              ADD TO CART
            </button>
          </div>

          <button
            className=" mt-4 border-2 border-green-600 mr-60 px-24 py-2 text-green-600  font-bold rounded-sm "
            type="button"
          >
            {" "}
            BUY IT NOW
          </button>

          <div className="flex justify-center mt-10">
            <p className="text-lg  ">
              Are you a sucker for succulents? The Crassula Green Mini will be
              your dream plant kid. One of the easiest houseplants to look
              after, the Crassula Green Mini boasts a lush foliage which
              beautifies any room. Also considered lucky as per Feng Shui for
              its coin like round plump leaves, so go on, bring some green home,
              the luck just tags along for free.
            </p>
          </div>
          <p className="mt-4 text-lg underline p-1">view full details --</p>
        </div>
      </div>
    </div>
  );
}
