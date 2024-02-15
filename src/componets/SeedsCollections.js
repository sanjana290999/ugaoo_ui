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
        {/* <p
          className=" text-4xl font-medium ml-60 mt-10
            "
        >
          {name}
        </p> */}
        <div className="flex justify-evenly mt-10">
          {data &&
            data.map((element) => (
              <div className="w-72  flex flex-col">
                <img
                  className="object-contain w-[100%]"
                  src={element.img}
                  alt="plant images"
                />
                <p className=" flex justify-start mt-4 text-xl font-bold">
                  {element.name}
                </p>
                <p className=" flex justify-start mt-4 text-lg  text-green-600">
                  &#x20B9;<s>{element.slasherPrice}</s>&nbsp; {element.price}{" "}
                  &#x20B9;
                </p>

                <button
                  className=" bg-green-700 py-2 text-white font-medium   mt-5"
                  type="button"
                >
                  {" "}
                  ADD TO CART
                </button>
              </div>
            ))}
          {/*  */}
        </div>
      </div>
      {showAllButton && (
        <div className="flex items-center  justify-center">
          <button
            className=" bg-green-700 px-28 py-2 text-white font-medium  mt-10 "
            type="button"
          >
            {" "}
            VIEW All
          </button>
        </div>
      )}
    </div>
  );
}
