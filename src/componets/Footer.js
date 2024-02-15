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
      <div className="flex justify-evenly p-5 text-white text-xl bg-green-900">
        <p>plants grow people</p>
        <p>plants grow people</p>
        <p>plants grow people</p>
        <p>plants grow people</p>
        <p>plants grow people</p>
        <p>plants grow people</p>
      </div>
      <div className="flex justify-center text-center underline text-green-600">
        <p className="p-4 ">mumbai</p>
        <p className="p-4">pune</p>
        <p className="p-4">Delhi</p>
        <p className="p-4">Bangalore</p>
        <p className="p-4">Hyderabad</p>
        <p className="p-4">Chennai</p>
        <p className="p-4">Kolkata</p>
      </div>
      <div className="flex justify-evenly">
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
