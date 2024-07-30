import React from "react";

export default function SeedsCollections({
  data,
  showAllButton,
  SeedsCollection,
  SeedsCollection1,
  SeedsCollection2,
}) {
  return (
    <div>
      <div>
        {/* <p className="text-4xl font-medium ml-60 mt-10">{name}</p> */}
        <div className="flex flex-wrap justify-evenly mt-10">
          {data &&
            data.map((element, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
              >
                <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg">
                  <img
                    className="object-contain w-full h-48"
                    src={element.img}
                    alt="plant images"
                  />
                  <p className="mt-4 text-xl font-bold">{element.name}</p>
                  <p className="mt-4 text-lg text-green-600">
                    &#x20B9;<s>{element.slasherPrice}</s>&nbsp; {element.price}{" "}
                    &#x20B9;
                  </p>
                  <button
                    className="bg-green-700 py-2 px-4 text-white font-medium mt-5 rounded"
                    type="button"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      {showAllButton && (
        <div className="flex items-center justify-center">
          <button
            className="bg-green-700 px-10 py-2 text-white font-medium mt-10 rounded"
            type="button"
          >
            VIEW ALL
          </button>
        </div>
      )}
    </div>
  );
}
