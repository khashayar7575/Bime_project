import React from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";


export const Hero = ({Insurance,CompareAndBuyInsuranceOnline,companySlogan,CompareInsuranceCompanies}) => {
  return (
    <div className="hero-sec ">
      <div className="hero-contents padding">
        <div className="hero-texts">
          <h1>{Insurance}</h1>
          <h2>{CompareAndBuyInsuranceOnline}</h2>
          <p>
            {companySlogan}
          </p>
        </div>
        <div className="hero-img">
          <Image
            className="full-img"
            src={"/hero-vector.svg"}
            width={550}
            height={389}
            alt=""
          />
        </div>
      </div>
      <div className="dvider d-flex-center">
        <div className="bottom-text d-flex-col-center">
          <h2 className="text">{CompareInsuranceCompanies}</h2>
          <img className="icon" src={"/icons/show-more-icon.svg"} />
        </div>
        <img
          className="full-img"
          src={"/dvider.svg"}
          // width={100}
          // height={500}
          // alt=""
        />
      </div>
    </div>
  );
};
