import React, { useState } from "react";
import { BreadCrumb } from "../exteras/components/BreadCrumb";
import { CarBodyInsuranceComp } from "../exteras/components/carbodyinsurance/CarBodyInsuranceComp";
import { Footer } from "../exteras/components/desktop/Footer";
import { Navbar } from "../exteras/components/Navbar";

const CarBodyInsurance = () => {
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

  const handleLogin = () => {
    setLoginVisible(!loginVisible);
  };
  return (
    <>
      <Navbar handleLogin={handleLogin} />
      <BreadCrumb title={"car_body_insurance"} />
      <div className="padding-2">
        <CarBodyInsuranceComp />
      </div>
      <Footer />
    </>
  );
};

export default CarBodyInsurance;
