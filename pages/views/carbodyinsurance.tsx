import React, { useState } from "react";
import { BreadCrumb } from "../../exteras/components/BreadCrumb";
import { AboutCar } from "../../exteras/components/carbodyinsurance/AboutCar";
import { CarBodyInsuranceComp } from "../../exteras/components/carbodyinsurance/CarBodyInsuranceComp";
import { Faq } from "../../exteras/components/carbodyinsurance/Faq";
import { Footer } from "../../exteras/components/desktop/Footer";
import { Navbar } from "../../exteras/components/Navbar";

const Carbodyinsurance = () => {
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

  const handleLogin = () => {
    setLoginVisible(!loginVisible);
  };
  return (
    <>
      <Navbar handleLogin={handleLogin} />
      <BreadCrumb title={"carbodyinsurance"} />
      <div className="padding-2">
        <CarBodyInsuranceComp />
        <AboutCar />
        {/* <Faq /> */}
      </div>
      <Footer />
    </>
  );
};

export default Carbodyinsurance;
