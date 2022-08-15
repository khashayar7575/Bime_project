import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export const MobileSide = ({ sideVisible, handleClose }) => {
  return (
    <div
      className="mobileside-sec d-flex-col g-30 padding"
      style={{
        opacity: sideVisible ? "1" : "0",
        transform: sideVisible ? "translateX(0)" : "translateX(100%)",
        visibility: sideVisible ? "visible" : "none",
      }}
    >
      <div className="close padding" onClick={() => handleClose()}>
        <AiFillCloseCircle />
      </div>
      <Link href={"/"}>
        <a className="d-flex-center g-5">Vehicle insurance</a>
      </Link>
      <Link href={"/"}>
        <a className="d-flex-center g-5">Property insurance</a>
      </Link>
      <Link href={"/"}>
        <a className="d-flex-center g-5">Liability insurance</a>
      </Link>
      <Link href={"/"}>
        <a className="d-flex-center g-5">Damage online</a>
      </Link>
      <Link href={"/"}>
        <a className="d-flex-center g-5">People insurance</a>
      </Link>
      <Link href={"/"}>
        <a className="d-flex-center g-5">Inaurance companies</a>
      </Link>
      <Link href={"/"}>
        <a className="d-flex-center g-5">Blog</a>
      </Link>
      <button className="btn-g d-flex-center p-15   ">Sign up / Login</button>
    </div>
  );
};
