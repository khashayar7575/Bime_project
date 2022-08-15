import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { MobileSide } from "./desktop/MobileSide";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {useTranslation} from "next-i18next"
import { GetStaticProps } from "next";


type LoginProps = {
  handleLogin: () => void;
};

export const Navbar = ({ handleLogin }: LoginProps ) => {
  const [sideVisible, setSideVisible] = useState(false);
  const handleClose = () => {
    setSideVisible(!sideVisible);
  };
  const {t}=useTranslation('common')

  return (
    <>
      <nav className="nav-sec d-flex-justify-between g-10 f-14 padding">
        <Link href={"/views/car_body_insurance"}>
          <a className="d-flex-center g-5">
          {t('VehicleInsurance')}
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            Property insurance
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            Liability insurance
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            Damage online
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            People insurance
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            Inaurance companies
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <Link href={"/"}>
          <a className="d-flex-center g-5">
            Blog
            <Image src={"/icons/arrow-down.svg"} width={11} height={5} />
          </a>
        </Link>
        <button className="btn-g" onClick={() => handleLogin()}>
          Sign up / Login
        </button>
      </nav>
      <div className="mobile-nav-sec padding" onClick={() => handleClose()}>
        <AiOutlineAlignLeft />
      </div>
      <MobileSide sideVisible={sideVisible} handleClose={handleClose} />
    </>
  );
};

export  const getStaticProps : GetStaticProps = async ({ locale }:any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}