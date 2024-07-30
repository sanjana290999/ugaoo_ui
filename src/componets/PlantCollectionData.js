import React from "react";

export default function PlantCollectionData({ data, showAllButton }) {
  return (
    <div>
      <div className="flex flex-wrap justify-center md:justify-evenly mt-10">
        {data &&
          data.map((element, index) => (
            <div key={index} className="w-full sm:w-72 flex flex-col m-4">
              <img
                className="object-contain w-full"
                src={element.img}
                alt="plant"
              />
              <p className="mt-4 text-xl font-bold">{element.name}</p>
              <p className="mt-4 text-lg text-green-600">
                &#x20B9;<s>{element.slasherPrice}</s>&nbsp; {element.price}{" "}
                &#x20B9;
              </p>
              <button
                className="bg-green-700 py-2 text-white font-medium mt-5"
                type="button"
              >
                VIEW PRODUCT
              </button>
            </div>
          ))}
      </div>
      {showAllButton && (
        <div className="flex items-center justify-center mt-10">
          <button
            className="bg-green-700 px-10 md:px-28 py-2 text-white font-medium"
            type="button"
          >
            VIEW ALL
          </button>
        </div>
      )}
    </div>
  );
}
