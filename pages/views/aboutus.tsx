import React, { useState } from "react";
import { AboutUsComp } from "../../exteras/components/AboutUs/AboutUsComp";
import { BreadCrumb } from "../../exteras/components/BreadCrumb";
import { Footer } from "../../exteras/components/desktop/Footer";
import { Navbar } from "../../exteras/components/Navbar";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {useTranslation} from "next-i18next"
import { GetStaticProps } from "next";



export  const getStaticProps : GetStaticProps = async ({ locale} : any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const AboutUs = () => {
  const {t}= useTranslation("common")
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

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
      <BreadCrumb title={"about us"} />
      <AboutUsComp InsuranceApp={t("InsuranceApp")} Lorem={t("Lorem")} />
      <Footer
      ContactInformation={t("ContactInformation")}
      location={t("location")}
      phoneNumber
      Email={t("Email")}
      AboutUs={t("AboutUs")}
      PrivacyAndPolicy={t("PrivacyAndPolicy")}
      FAQ={t("FAQ")}
      Cooperation={t("CooperationWithInsuranceAgents")}
      contactUs={t("contactUs")}
      JobOffers={t("JobOffers")}
      Services={t("Services")}
      OnlineDamage={t("OnlineDamage")}
      ThirdPartyInsurance={t("ThirdPartyInsurance")}
      CarBodyIncurance={t("CarBodyIncurance")}
      lifeInsurance={t("lifeInsurance")}
      FireIncurance={t("FireIncurance")}
      MotorcycleInsurance={t("MotorcycleInsurance")}
      TreatmentInsurance={t("TreatmentInsurance")}
      DownloadApplication={t("DownloadApplication")}
      Copyright={t("Copyright ?? 1996???2022 Bime.com???. All rights reserved.")}
      />
    </>
  );
};

export default AboutUs;
