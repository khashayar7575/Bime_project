import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

type LoginProps = {
  AboutCarInsurance : String
  BodyInsuranceExplanation : String
}

export const AboutCar = ({AboutCarInsurance,BodyInsuranceExplanation}:LoginProps) => {
  return (
    <div className="aboutcar-sec d-flex-col g-10 m-b">
      <h2 className="head-2">{AboutCarInsurance}</h2>
      <p className="body">
        {BodyInsuranceExplanation}
      </p>
      <div className="arrow m-auto ">
        <AiFillCaretDown />
      </div>
    </div>
  );
};
