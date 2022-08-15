import React from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="hero-sec ">
      <div className="hero-contents padding">
        <div className="hero-texts">
          <h1>Insurance</h1>
          <h2>Compare and buy insurance online</h2>
          <p>
            The possibility of easy comparison and suitable choice among
            different insurance companies according to your conditions
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
          <h2 className="text">Compare insurance companies</h2>
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
