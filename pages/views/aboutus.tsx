import React, { useState } from "react";
import { AboutUsComp } from "../../exteras/components/AboutUs/AboutUsComp";
import { BreadCrumb } from "../../exteras/components/BreadCrumb";
import { Footer } from "../../exteras/components/desktop/Footer";
import { Navbar } from "../../exteras/components/Navbar";

const AboutUs = () => {
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

  const handleLogin = () => {
    setLoginVisible(!loginVisible);
  };
  return (
    <>
      <Navbar handleLogin={handleLogin} />
      <BreadCrumb title={"about us"} />
      <AboutUsComp />
      <Footer />
    </>
  );
};

export default AboutUs;
