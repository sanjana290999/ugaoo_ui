import React from "react";

export default function SeedsInformation({ element }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl sm:text-3xl font-normal">{element?.name}</p>
        <p className="mt-4 sm:mt-7 text-lg sm:text-xl">
          {element?.description}
        </p>
        <p className="text-lg sm:text-xl font-medium mt-6">
          {element?.heading}
        </p>
        <p className="mt-4 sm:mt-7 text-base sm:text-lg">
          {element?.paregraph}
        </p>
        <p className="text-2xl sm:text-3xl font-normal mt-6">{element?.h1}</p>
        <p className="mt-4 sm:mt-7 text-lg sm:text-xl">{element?.h2}</p>
        <p className="text-lg sm:text-xl font-medium mt-6">{element?.head}</p>
        <div className="mt-4 sm:mt-7 space-y-4">
          {element?.p1 && <p className="text-base sm:text-lg">{element?.p1}</p>}
          {element?.p2 && <p className="text-base sm:text-lg">{element?.p2}</p>}
          {element?.p3 && <p className="text-base sm:text-lg">{element?.p3}</p>}
          {element?.p4 && <p className="text-base sm:text-lg">{element?.p4}</p>}
          {element?.p5 && <p className="text-base sm:text-lg">{element?.p5}</p>}
          {element?.p6 && <p className="text-base sm:text-lg">{element?.p6}</p>}
        </div>
        <p className="text-2xl sm:text-3xl font-normal mt-6">
          {element?.namee}
        </p>
        <p className="mt-4 sm:mt-7 text-lg sm:text-xl">
          {element?.descriptions}
        </p>
      </div>
    </div>
  );
}
