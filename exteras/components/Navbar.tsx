import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { MobileSide } from "./desktop/MobileSide";




type LoginProps = {
  handleLogin: () => void;
  VehicleInsurance : string,
  PropertyInsurance : string,
  LiabilityInsurance : string,
  DamageOnline : string,
  PeopleInsurance : string,
  InsuranceCompanies : string,
  Blog : string,
  SignUp : string,
};

export const Navbar = ({ handleLogin , VehicleInsurance  ,PropertyInsurance , LiabilityInsurance , DamageOnline , PeopleInsurance ,InsuranceCompanies,Blog,SignUp}: LoginProps ) => {
  const [sideVisible, setSideVisible] = useState(false);
  const handleClose = () => {
    setSideVisible(!sideVisible);
  };
  return (
    <>
      <nav className="nav-sec d-flex-justify-between g-10 f-14 padding">
        <Link href={"/views/car_body_insurance"}>
          <a className="d-flex-center g-5">
             {VehicleInsurance}
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            {PropertyInsurance}
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            {LiabilityInsurance}
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            {DamageOnline}
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            {PeopleInsurance}
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            {InsuranceCompanies}
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            {Blog}
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <button className="btn-g" onClick={() => handleLogin()}>
          {SignUp}
        </button>
      </nav>
      <div className="mobile-nav-sec padding" onClick={() => handleClose()}>
        <AiOutlineAlignLeft />
      </div>
      <MobileSide sideVisible={sideVisible} handleClose={handleClose} />
    </>
  );
};

