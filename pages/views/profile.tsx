import React, { useState } from "react";
import { BreadCrumb } from "../../exteras/components/BreadCrumb";
import { Footer } from "../../exteras/components/desktop/Footer";
import { Navbar } from "../../exteras/components/Navbar";
import { Profile_Comp } from "../../exteras/components/Profile/Profile_Comp";

const Profile = () => {
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

  const handleLogin = () => {
    setLoginVisible(!loginVisible);
  };
  return (
    <>
      <Navbar handleLogin={handleLogin} />
      <BreadCrumb title="profile" />
      <Profile_Comp />
      <Footer />
    </>
  );
};

export default Profile;
