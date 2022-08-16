import React, { useState } from "react";
import { BreadCrumb } from "../../exteras/components/BreadCrumb";
import { AboutCar } from "../../exteras/components/carbodyinsurance/AboutCar";
import { CarBodyInsuranceComp } from "../../exteras/components/carbodyinsurance/CarBodyInsuranceComp";
import { Faq } from "../../exteras/components/carbodyinsurance/Faq";
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

const Carbodyinsurance = () => {
  const {t}= useTranslation("common")

  const [loginVisible, setLoginVisible] = useState<boolean>(false);

  const handleLogin = () => {
    setLoginVisible(!loginVisible);
  };
  return (
    <>
      <Navbar handleLogin={handleLogin}
       LiabilityInsurance={t("LiabilityInsurance")}  
       PropertyInsurance={t("Property insurance")} 
       VehicleInsurance={t("VehicleInsurance")} 
       DamageOnline={t("DamageOnline")}
       PeopleInsurance={t("PeopleInsurance")}
       InsuranceCompanies={t("InsuranceCompanies")}
       Blog={t("Blog")}
       SignUp={t("SignUp/Login")}
      />
      <BreadCrumb title={"carbodyinsurance"} />
      <div className="padding-2">
        <CarBodyInsuranceComp
        EnterCarDetails={t("EnterCarDetails")}
        withoutNumberPallet={t("withoutNumberPallet")}
        CarBodyInsurance={t("CarBodyInsurance")}
        SeeInsurancePrices={t("SeeInsurancePrices")}
        />
        <AboutCar 
        AboutCarInsurance={t("AboutCarInsurance")}
        BodyInsuranceExplanation={t("BodyInsuranceExplanation")}
        />
        {/* <Faq /> */}
      </div>
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
      Copyright={t("Copyright © 1996–2022 Bime.com™. All rights reserved.")}
      />
    </>
  );
};

export default Carbodyinsurance;
