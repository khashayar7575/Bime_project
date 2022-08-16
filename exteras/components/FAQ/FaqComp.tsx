import React from "react";
import Accordeon from "../globals/Accordeon";

type LoginProps = {
  TableOfContents : String
  General : String
  Insurances : String
  Payment : String
}

export const FaqComp = ({TableOfContents,General,Insurances,Payment}:LoginProps) => {
  return (
    <div className="padding-2 faq-sec">
      <div className="faq-wrapper g-20 w-100">
        <div className="faq-sidebar">
          <h4>{TableOfContents}</h4>
          <span className="text">{General}</span>
          <span className="text">{Insurances}</span>
          <span className="text">{Payment}</span>
        </div>
        <div className="faq-accordeon">
          <Accordeon />
        </div>
      </div>
    </div>
  );
};
