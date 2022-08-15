import React from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="footer-sec  padding-footer">
      <div className="footer-contents d-grid">
        <div className="footer-item d-flex-col">
          <h4 className="title">Contact Information</h4>
          <p className="text d-flex-center g-5">
            <img src="/icons/marker.svg" alt="" />
            <span>Texas, USA</span>
          </p>
          <p className="text d-flex-center g-5">
            <img src="/icons/phone-call.svg" alt="" />
            <span>+123456789</span>
          </p>
          <p className="text d-flex-center g-5">
            <img src="/icons/message.svg" alt="" />
            <span>Bimeemail@gmail.com</span>
          </p>
          <div className="socials d-flex-center g-10">
            <img src="/icons/instagram.svg" alt="" />
            <img src="/icons/whatsapp.svg" alt="" />
            <img src="/icons/telegram.svg" alt="" />
          </div>
        </div>
        <div className="footer-item d-flex-col">
          <h4 className="title">About Us</h4>
          <p className="text d-flex-center g-5">
            <span>Privacy & Policy</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>FAQ</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>Cooperation with insurance agents</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>contact us</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>About us</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>Job offers</span>
          </p>
        </div>
        <div className="footer-item d-flex-col">
          <h4 className="title">Services</h4>
          <p className="text d-flex-center g-5">
            <span>Online Damage</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>Third party insurance</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>Car body incurance</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>Fire incurance</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>life insurance</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>Motorcycle insurance</span>
          </p>
          <p className="text d-flex-center g-5">
            <span>Treatment insurance</span>
          </p>
        </div>
        <div className="footer-item d-flex-col g-5">
          <h4 className="text">Download Application</h4>
          <img className="store" src="/app-store.svg" alt="" />
          <img  className="store" src="/google-play.svg" alt="" />
        </div>
      </div>
      <span className="copy-right">
        Copyright © 1996–2022 Bime.com™. All rights reserved.{" "}
      </span>
    </div>
  );
};
