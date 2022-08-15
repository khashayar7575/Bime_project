import React from "react";

export const CarBodyInsuranceComp = () => {
  return (
    <div className="carbodyinsurance-sec m-b">
      <div className="part1 d-flex-col g-10">
        <div className="text">
          Enter your car details through one of the following methods.
        </div>
        <div className="tabs d-flex g-10">
          <span className="in-padding">without number pallet</span>
          <span className="active in-padding">with number pallet</span>
        </div>
        <div className="content in-padding m-b w-100 d-flex-center">
          <img className="" src="/carbodyinsurance/plake.svg" alt="" />
        </div>
      </div>
      <div className="part2 d-flex-col g-10">
        <div className="part2-contents w-100 d-flex-col g-10">
          <img
            className="full-img m-auto"
            src="/carbodyinsurance/carbody.svg"
            alt=""
          />
          <h2 className="text">Car body Insurance</h2>
          <div className="desc">
            See insurance prices and compare them easily
          </div>
          <div className="btns d-flex-center g-10 m-auto">
            <div className="bbls"></div>
            <div className="bbls"></div>
            <div className="bbls active"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
