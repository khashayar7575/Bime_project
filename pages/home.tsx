import React, { useState } from "react";
import { Navbar } from "../exteras/components/Navbar";
import { Hero } from "../exteras/components/desktop/Hero";
import { InsuranceCompanies } from "../exteras/components/desktop/InsuranceCompanies";
import { OnlineServices } from "../exteras/components/desktop/OnlineServices";
import { Blog } from "../exteras/components/desktop/Blog";
import { Comments } from "../exteras/components/desktop/Comments";
import { Companies } from "../exteras/components/desktop/Companies";
import { Footer } from "../exteras/components/desktop/Footer";
import { LoginModal } from "../exteras/components/modal/LoginModal";

const Home = () => {
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

  const handleLogin = () => {
    setLoginVisible(!loginVisible);
  };
  return (
    <>
      {loginVisible && <LoginModal handleLogin={handleLogin} />}
      <Navbar handleLogin={handleLogin} />
      <Hero />
      <InsuranceCompanies />
      {/* Not responsive  */}
      <OnlineServices />
      <Blog />
      <Comments />
      <Companies />
      <Footer />
    </>
  );
};

export default Home;


