import React, { useState } from "react";
import { BreadCrumb } from "../exteras/components/BreadCrumb";
import { CarBodyInsuranceComp } from "../exteras/components/carbodyinsurance/CarBodyInsuranceComp";
import { Footer } from "../exteras/components/desktop/Footer";
import { Navbar } from "../exteras/components/Navbar";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {useTranslation} from "next-i18next"
import {GetStaticProps} from "next";


export  const getStaticProps : GetStaticProps = async ({ locale} : any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}


const CarBodyInsurance = () => {
  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const {t} = useTranslation("common")

  const handleLogin = () => {
    setLoginVisible(!loginVisible);
  };
  return (
    <>
      <Navbar 
      LiabilityInsurance={t("LiabilityInsurance")}  
      PropertyInsurance={t("Property insurance")} 
      VehicleInsurance={t("VehicleInsurance")} 
      DamageOnline={t("DamageOnline")}
      PeopleInsurance={t("PeopleInsurance")}
      InsuranceCompanies={t("InsuranceCompanies")}
      Blog={t("Blog")}
      SignUp={t("SignUp/Login")}
      handleLogin={handleLogin} 
      />
      <BreadCrumb title={"car_body_insurance"} />
      <div className="padding-2">
        <CarBodyInsuranceComp />
      </div>
      <Footer />
    </>
  );
};

export default CarBodyInsurance;
