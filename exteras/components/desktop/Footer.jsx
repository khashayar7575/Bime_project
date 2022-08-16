import React from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";

export const Footer = ({Copyright,DownloadApplication,TreatmentInsurance,MotorcycleInsurance,FireIncurance,lifeInsurance,CarBodyIncurance,ThirdPartyInsurance,OnlineDamage,Services,JobOffers,ContactInformation,location,phoneNumber,Email,AboutUs,PrivacyAndPolicy,FAQ,Cooperation,contactUs}) => {
  return (
    <div className="footer-sec  padding-footer">
      <div className="footer-contents d-grid">
        <div className="footer-item d-flex-col">
          <h4 className="title">{ContactInformation}</h4>
          <p className="text d-flex-center g-5">
            <img src="/icons/marker.svg" alt="" />
            <span>{location}</span>
          </p>
          <p className="text d-flex-center g-5">
            <img src="/icons/phone-call.svg" alt="" />
            <span>{phoneNumber}</span>
          </p>
          <p className="text d-flex-center g-5">
            <img src="/icons/message.svg" alt="" />
            <span>{Email}</span>
          </p>
          <div className="socials d-flex-center g-10">
            <img src="/icons/instagram.svg" alt="" />
            <img src="/icons/whatsapp.svg" alt="" />
            <img src="/icons/telegram.svg" alt="" />
          </div>
        </div>
        <div className="footer-item d-flex-col">
          <h4 className="title">{AboutUs}</h4>
          <p className="text d-flex-center g-5">
            <span>{PrivacyAndPolicy}</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>{FAQ}</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>{Cooperation}</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>{contactUs}</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>{AboutUs}</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>{JobOffers}</span>
          </p>
        </div>
        <div className="footer-item d-flex-col">
          <h4 className="title">{Services}</h4>
          <p className="text d-flex-center g-5">
            <span>{OnlineDamage}</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>{ThirdPartyInsurance}</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>{CarBodyIncurance}</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>{FireIncurance}</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>{lifeInsurance}</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>{MotorcycleInsurance}</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>{TreatmentInsurance}</span>
          </p>
        </div>
        <div className="footer-item d-flex-col g-5">
          <h4 className="text">{DownloadApplication}</h4>
          <img className="store" src="/app-store.svg" alt="" />
          <img  className="store" src="/google-play.svg" alt="" />
        </div>
      </div>
      <span className="copy-right">
        {Copyright}{" "}
      </span>
    </div>
  );
};
