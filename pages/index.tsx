import type { NextPage } from "next";
import { Navbar } from "../exteras/components/Navbar";
import { Hero } from "../exteras/components/desktop/Hero";
import { InsuranceCompanies } from "../exteras/components/desktop/InsuranceCompanies";
import { OnlineServices } from "../exteras/components/desktop/OnlineServices";
import { Blog } from "../exteras/components/desktop/Blog";
import { Comments } from "../exteras/components/desktop/Comments";
import { Companies } from "../exteras/components/desktop/Companies";
import { Footer } from "../exteras/components/desktop/Footer";
import React from "react";
import { useRouter } from "next/router";
import {GetStaticProps} from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {useTranslation} from "next-i18next"

export  const getStaticProps : GetStaticProps = async ({ locale} : any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}


const Home: NextPage = () => {
  const {t} = useTranslation("common"); 
  return(
  <>
    {/* <Navbar /> */}
    <Hero
     Insurance={t("Insurance")}
     CompareAndBuyInsuranceOnline={t("CompareAndBuyInsuranceOnline")} 
     companySlogan={t("ThePossibilityOfEasyComparisonAndSuitableChoiceAmongDifferentInsuranceCompaniesAccordingToYourConditions")}
     CompareInsuranceCompanies={t("CompareInsuranceCompanies")}
    />
    <InsuranceCompanies
     carBody={t("carBody")} 
     ThirdParty={t("ThirdParty")}
     Motorcycle={t("Motorcycle")}
     Earthquake={t("Earthquake")}
     Fire={t("Fire")} 
     Travel={t("Travel")}
     groupHealth={t("groupHealth")}
     life={t("life")}
     health={t("health")}
     medical={t("medical")}
     view={t("viewAllInsurances")}
     safe={t("SafeAndAffordablePurchase")}
     getInsurance={t("GetTheInsuranceYouWantEasilyAndAtAReasonablePrice")}
     HourSupport={t("24HourSupport")}
     haveQues={t("IfYouHaveAnyQuestionsOrDoubts,YouCanContactOurSupport.")}
     choose={t("ChoosingTheMostSuitableInsurance")}
     possibility={t("ThereAreManyPossibilitiesToCompareAndPrepareYourDesiredInsurance")}
    />
    <OnlineServices 
     OnlineServices={t("OnlineServices")}
     OnlineTreatment ={t("OnlineTreatmentCompensation")}
     PaymentOfTreatment={t("PaymentOfTreatmentFromInsurance")}
     RequestRegistration={t("RequestRegistration")}
     OnlineCarDamagePayment={t("OnlineCarDamagePayment")}
     PaymentOfDamages={t("PaymentOfDamagesInThreeStages")}
    />
    <Blog />
    <Comments />
    <Companies />
    <Footer />
  </>
  )
};

export default Home;

