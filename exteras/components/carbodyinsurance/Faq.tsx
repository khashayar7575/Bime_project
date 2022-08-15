import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

export const Faq = () => {
  return (
    <div className="aboutcar-sec d-flex-col g-10 m-b">
      <h2 className="head-2">FAQ</h2>
      <p className="body">
        Body insurance is one of the types of car insurance that covers the
        insured car against various incidents such as accidents, collisions,
        overturning, fire and even theft. The high price of the car and its
        accessories and spare parts and the high cost of wages and repairs have
        made body insurance necessary for all cars. Car body insurance services
        and coverages are different in different insurance companies, and this
        makes it difficult for car owners to choose the car body insurance. The
        best solution is to inquire about body insurance from reputable
        insurance companies and compare and buy body insurance online.
      </p>
      <div className="arrow m-auto ">
        <AiFillCaretDown />
      </div>
    </div>
  );
};
