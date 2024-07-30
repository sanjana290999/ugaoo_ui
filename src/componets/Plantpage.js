import React from "react";

export default function Plants({ name, data, showAllButton }) {
  return (
    <div>
      <div>
        <p className="text-4xl font-medium text-center mt-10">{name}</p>
        <div className="flex flex-wrap justify-evenly px-4 md:px-20 mt-10">
          {data &&
            data.map((element, index) => (
              <div
                key={index}
                className="w-full sm:w-80 flex flex-col items-center mb-6"
              >
                <img
                  className="object-contain w-full sm:w-[100%]"
                  src={element.img}
                  alt="plant images"
                />
                <p className="flex justify-start mt-4 text-xl font-bold">
                  {element.name}
                </p>
                <p className="flex justify-start mt-4 text-lg text-green-600">
                  &#x20B9;<s>{element.slasherPrice}</s>&nbsp; {element.price}{" "}
                  &#x20B9;
                </p>
                <button
                  className="bg-green-700 px-10 py-2 text-white font-medium mt-5"
                  type="button"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
        </div>
      </div>
      {showAllButton && (
        <div className="flex items-center justify-center">
          <button
            className="bg-green-700 px-10 md:px-28 py-2 text-white font-medium mt-10"
            type="button"
          >
            VIEW ALL
          </button>
        </div>
      )}
    </div>
  );
}
