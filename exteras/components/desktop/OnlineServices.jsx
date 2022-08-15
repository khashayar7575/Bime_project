import React from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";

export const OnlineServices = ({PaymentOfDamages,OnlineCarDamagePayment,OnlineServices,PaymentOfTreatment,OnlineTreatment,RequestRegistration}) => {
  return (
    <div className="online-services-sec padding">
      <div className="sec-title">{OnlineServices}</div>
      <div className="online-services-contents d-flex-justify-center g-50">
        <div className="online-services-item ">
          <div className="online-services-inner d-flex-col-between g-20">
            <div className="icon">
              <img src="/icons/treatment.svg" alt="" />
            </div>
            <div className="title">{OnlineTreatment}</div>
            <div className="text">{PaymentOfTreatment}</div>
            <div className="btn-g-radius d-flex-justify-center">
              {RequestRegistration}
            </div>
          </div>
        </div>
        <div className="online-services-item ">
          <div className="online-services-inner d-flex-col-between g-20">
            <div className="icon">
              <img src="/icons/car-damage.svg" alt="" />
            </div>
            <div className="title">{OnlineCarDamagePayment}</div>
            <div className="text">{PaymentOfDamages}</div>
            <div className="btn-g-radius d-flex-justify-center">
              {RequestRegistration}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
