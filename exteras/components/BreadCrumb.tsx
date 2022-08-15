import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

type breadProps = {
  title: string;
};

export const BreadCrumb = ({ title }: breadProps) => {
  return (
    <div className="breadcrumb-sec d-flex-center g-10 padding-2">
      <span className="btn">
        <AiOutlineArrowLeft />
      </span>
      <span>{title}</span>
    </div>
  );
};
