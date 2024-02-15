import React from "react";
export default function PlantInformation({ element }) {
  return (
    <div>
      <div className="mx-80 mt-10 ">
        <p className="text-3xl font-normal ">{element.name}</p>{" "}
        <p className="mt-7 text-xl">{element.description}</p>
        <p className="text-xl font-medium mt-7">{element.heading}</p>{" "}
        <p className="mt-7 text-lg">{element.paregraph}</p>
        <p className="text-3xl font-normal mt-7 ">{element.h1}</p>{" "}
        <p className="mt-7 text-xl">{element.h2}</p>
        <p className="text-xl mt-7  font-medium ">{element.head}</p>{" "}
        <p className="text-lg mt-5  ">{element.p1}</p>{" "}
        <p className="text-lg mt-5  ">{element.p2}</p>{" "}
        <p className="text-lg mt-5  ">{element.p3}</p>{" "}
        <p className="text-lg mt-5  ">{element.p4}</p>{" "}
        <p className="text-lg mt-5  "> {element.p5}</p>{" "}
        <p className="text-lg mt-5  ">{element.p6}</p>{" "}
        <p className="text-3xl font-normal ">{element.namee}</p>{" "}
        <p className="mt-7 text-xl">{element.descriptions}</p>
      </div>
    </div>
  );
}
