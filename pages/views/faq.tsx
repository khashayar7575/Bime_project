import React, { useState } from "react";
import { BreadCrumb } from "../../exteras/components/BreadCrumb";
import { Footer } from "../../exteras/components/desktop/Footer";
import { FaqComp } from "../../exteras/components/FAQ/FaqComp";
import { Navbar } from "../../exteras/components/Navbar";

const Faq = () => {
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

  const handleLogin = () => {
    setLoginVisible(!loginVisible);
  };
  return (
    <>
      <Navbar handleLogin={handleLogin} />
      <BreadCrumb title={"faq"} />
      <FaqComp />
      <Footer />
    </>
  );
};

export default Faq;
