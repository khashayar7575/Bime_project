import React from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";

export const InsuranceCompanies = ({possibility,choose,haveQues,HourSupport,getInsurance,carBody,ThirdParty,Motorcycle,Earthquake,Fire,Travel,groupHealth,life,health,medical,view,safe}) => {
  return (
    <>
      <div className="sec insurance-sec d-flex-col-center padding">
        <div className="insurance-contents d-grid g-44">
          <div className="insurance-item d-flex-col-center g-2">
            <img src={"/icons/car-icon.svg"} alt="" className="icon" />
            <span className="text">{carBody}</span>
          </div>
          <div className="insurance-item d-flex-col-center g-2">
            <img src={"/icons/2-car-icon.svg"} alt="" className="icon" />
            <span className="text">{ThirdParty}</span>
          </div>
          <div className="insurance-item d-flex-col-center g-2">
            <img src={"/icons/motor.svg"} alt="" className="icon" />
            <span className="text">{Motorcycle}</span>
          </div>
          <div className="insurance-item d-flex-col-center g-2">
            <img src={"/icons/erthQuack.svg"} alt="" className="icon" />
            <span className="text">{Earthquake}</span>
          </div>
          <div className="insurance-item d-flex-col-center g-2">
            <img src={"/icons/fire.svg"} alt="" className="icon" />
            <span className="text">{Fire}</span>
          </div>
          <div className="insurance-item d-flex-col-center g-2">
            <img src={"/icons/plane.svg"} alt="" className="icon" />
            <span className="text">{Travel}</span>
          </div>
          <div className="insurance-item d-flex-col-center g-2">
            <img src={"/icons/group-health.svg"} alt="" className="icon" />
            <span className="text">{groupHealth}</span>
          </div>
          <div className="insurance-item d-flex-col-center g-2">
            <img src={"/icons/life.svg"} alt="" className="icon" />
            <span className="text">{life}</span>
          </div>
          <div className="insurance-item d-flex-col-center g-2">
            <img src={"/icons/health.svg"} alt="" className="icon" />
            <span className="text">{health}</span>
          </div>
          <div className="insurance-item d-flex-col-center g-2">
            <img src={"/icons/medical.svg"} alt="" className="icon" />
            <span className="text">{medical}</span>
          </div>
        </div>
        <div className="view-all d-flex-justify-center">
          <button className="btn-g-radius d-flex-justify-center g-5">
            <span>{view}</span>
            <span>
              <img
                className="icon"
                src="/icons/insurance-btn-icon.svg"
                alt=""
              />
            </span>
          </button>
        </div>
      </div>
      <div className=" insurance-footer padding">
        <div className="insurance-footer-contents d-flex-justify-between">
          <div className="insurance-footer-content d-flex-col-center">
            <div className="icon-item d-flex-justify-center ">
              <img src="/icons/safe.svg" alt="" />
            </div>
            <h3 className="title">{safe}</h3>
            <p className="text">
              {" "}
              {getInsurance}
            </p>
          </div>
          <div className="insurance-footer-content d-flex-col-center">
            <div className="icon-item d-flex-justify-center ">
              <img src="/icons/support.svg" alt="" />
            </div>
            <h3 className="title">{HourSupport}</h3>
            <p className="text">
              {" "}
              {haveQues}
            </p>
          </div>
          <div className="insurance-footer-content d-flex-col-center">
            <div className="icon-item d-flex-justify-center ">
              <img src="/icons/successfull.svg" alt="" />
            </div>
            <h3 className="title">{choose}</h3>
            <p className="text">
              {" "}
              {possibility}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
