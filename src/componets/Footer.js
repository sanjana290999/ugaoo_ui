import React from "react";
import FooterContian from "./footerContian";
import {
  Aboutus,
  CUSTOMER_CARE,
  OFFERS_REWARDS,
  GET_IN_TOUCH,
  SIGNUP_FOR_OUR_NEWSLETTER,
} from "./FooterInfo";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-wrap justify-center p-5 text-white text-xl bg-green-900">
        {Array(6)
          .fill("plants grow people")
          .map((text, index) => (
            <p key={index} className="p-2 md:p-5">
              {text}
            </p>
          ))}
      </div>
      <div className="flex flex-wrap justify-center text-center underline text-green-600">
        {[
          "Mumbai",
          "Pune",
          "Delhi",
          "Bangalore",
          "Hyderabad",
          "Chennai",
          "Kolkata",
        ].map((city, index) => (
          <p key={index} className="p-2 md:p-4">
            {city}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap justify-evenly p-5">
        <FooterContian name={"ABOUT US"} data={Aboutus} />
        <FooterContian name={"CUSTOMER CARE"} data={CUSTOMER_CARE} />
        <FooterContian name={"OFFERS REWARDS"} data={OFFERS_REWARDS} />
        <FooterContian name={"GET IN TOUCH"} data={GET_IN_TOUCH} />
        <FooterContian
          className="text-center"
          name={"SIGN UP FOR OUR NEWSLETTER"}
          data={SIGNUP_FOR_OUR_NEWSLETTER}
        />
      </div>
    </div>
  );
}
