import React from "react";




type LoginProps = {
  InsuranceApp : String,
  Lorem : String,
}


export const AboutUsComp = ({InsuranceApp,Lorem} : LoginProps) => {
  return (
    <div className="padding-2 about-sec">
      <div className="about-wrapper d-flex-center">
        <div className="about-content">
          <h2>{InsuranceApp}</h2>
          <p>
            {Lorem}
          </p>
          <div className="socials d-flex-justify-center g-10 w-100">
            <div className="icon">
              {" "}
              <img src="/about-icons/instagram.svg" alt="" />
            </div>
            <div className="icon">
              {" "}
              <img src="/about-icons/linkedin.svg" alt="" />
            </div>
            <div className="icon">
              {" "}
              <img src="/about-icons/message.svg" alt="" />
            </div>
            <div className="icon">
              {" "}
              <img src="/about-icons/telegram.svg" alt="" />
            </div>
            <div className="icon">
              {" "}
              <img src="/about-icons/whatsapp.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
