import React from "react";

export default function PlantSubscription() {
  return (
    <div>
      <div className="text-center px-4 md:px-0">
        <p className="text-4xl font-medium pt-16 pb-10">
          Experience the magic of growing plants
        </p>
        <p className="text-xl">
          Ugaoo is here to inspire you to have plants around you. To look at
          life in a very different way, helping you connect with nature. Each
          plant you buy is packed and shipped with care, from our 18-acre farm
          to your doorstep.
        </p>
      </div>
      <div className="flex flex-col md:flex-row p-4 md:p-20">
        <div className="w-full md:w-[50%] flex justify-center md:justify-end">
          <img
            className="w-[80%] "
            src="./asset/images/bigplant-1.webp"
            alt="Big Plant"
          />
        </div>
        <div className="w-full md:w-[50%] flex justify-center flex-col items-center md:items-start mt-10 md:mt-0">
          <p className="text-4xl font-medium text-center md:text-left">
            Plant Subscriptions
          </p>
          <p className="mt-10 text-xl text-center md:text-left">
            Receive a curated box of handpicked plants, packaged with care,
            every month.
          </p>
          <button className="bg-green-600 p-2 rounded-lg mt-5 text-white">
            EXPLOR BOXES
          </button>
        </div>
      </div>
      <div className="px-4 md:px-40">
        <p className="text-4xl text-center">About Ugaoo</p>
        <p className="text-center mt-5">
          Ugaoo is India’s largest and most trusted online plant nursery that
          specialises in all your gardening needs. The Ugaoo online nursery not
          only sells premium quality exotic indoor plants, outdoor plants,
          flowering plants, and succulents to name a few, but also specialises
          in organic vegetable, herb, and flower seeds. Ugaoo provides premium,
          trendy planters, best in class soil and fertilisers, and all the
          gardening tools a home gardener can need. At Ugaoo we believe that we
          are more than a garden store, we help people grow along their
          gardening journey. After all, plants grow people. We believe in the
          magic of growing things and discovering our inner self in the process
          while revelling in the joy of your first new leaf, your first bloom,
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
