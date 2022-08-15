import React from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";

export const OnlineServices = () => {
  return (
    <div className="online-services-sec padding">
      <div className="sec-title">Online services</div>
      <div className="online-services-contents d-flex-justify-center g-50">
        <div className="online-services-item ">
          <div className="online-services-inner d-flex-col-between g-20">
            <div className="icon">
              <img src="/icons/treatment.svg" alt="" />
            </div>
            <div className="title">Online treatment compensation</div>
            <div className="text">Payment of treatment from insurance</div>
            <div className="btn-g-radius d-flex-justify-center">
              Request registration
            </div>
          </div>
        </div>
        <div className="online-services-item ">
          <div className="online-services-inner d-flex-col-between g-20">
            <div className="icon">
              <img src="/icons/car-damage.svg" alt="" />
            </div>
            <div className="title">Online car damage payment</div>
            <div className="text">Payment of damages in three stages</div>
            <div className="btn-g-radius d-flex-justify-center">
              Request registration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
