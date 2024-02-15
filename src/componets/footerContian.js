import React from "react";
export default function FooterContian({ name, data }) {
  return (
    <>
      <div className="Flex text-green-700 mt-20">
        <p className="text-xl">{name}</p>
        <div className=" text-green-700 mt-5">
          {data && data.map((element) => <p className="p-1">{element}</p>)}
        </div>
      </div>
    </>
  );
}
