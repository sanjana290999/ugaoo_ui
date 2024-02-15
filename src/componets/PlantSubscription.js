import React from "react";
export default function PlantSubscription() {
  return (
    <div>
      <div>
        <p className=" flex justify-center text-4xl font-medium pt-16 pb-10">
          Experience the magic of growing plants
        </p>
        <p className=" flex justify-center text-xl text-center">
          Ugaoo is here to inspire you to have plants around you. To look at
          <br />
          life in a very different way, helping you connect with nature. Each
          <br />
          plant you buy is packed and shipped with care, from our 18-acre <br />{" "}
          farm to your doorstep.
        </p>
      </div>
      <div className="flex  p-20 ml-20">
        <div className="w-[50%]">
          <img
            className="w-[80%] "
            src="./asset/images/bigplant-1.webp"
            alt=""
          />
        </div>
        <div className=" flex justify-center flex-col">
          <p className="text-4xl font-medium">Plant Subscriptions</p>
          <p className="mt-10 text-start text-xl">
            Receive a curated box of handpicked plants, packaged <br /> with
            care, every month.
          </p>
          <button className=" bg-green-600 mr-60 p-2 rounded-lg mt-5 text-white">
            {" "}
            EXPLOR BOXES
          </button>
        </div>
      </div>
      <div className=" px-40 ">
        <p className="text-4xl text-center">About Ugaoo</p>
        <p className="text-center mt-5 flex justify-between">
          Ugaoo is India’s largest and most trusted online plant nursery that
          specialises in all your gardening needs. The Ugaoo online nursery not
          only sells premium quality exotic indoor plants, outdoor plants,
          flowering plants, and succulents to name a few, but also specialises
          in organic vegetable, herb, and flower seeds. Ugaoo provides premium,
          trendy planters, best in class soil and fertilisers, and all the
          gardening tools a home gardener can need. At Ugaoo we believe that we
          are more than a garden store, we help people grow along their
          gardening journey, Afterall plants grow people. We believe in the
          magic of growing things and discovering our inner self in the process
          while revelling in the jot of your first new leaf, your first bloom,
          or your first sprouted seed. Ugaoo prides itself in the fact that it
          is not just an online garden store or online plant nursery but a
          friend who helps both you and your garden grow. We provide a lifetime
          of gardening support and hand hold you through all your gardening
          journeys.
        </p>
      </div>
    </div>
  );
}
