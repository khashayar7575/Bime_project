import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { RenewalModal } from "../modal/RenewalModal";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

type ProfileProps = {
  title: String;
  handleTitle: (val: String) => void;
};
export const My_Number_Plates = ({ handleTitle, title }: ProfileProps) => {
  const [renewal, setRenewal] = useState<boolean>(false);

  const handleRenewal = () => {
    setRenewal(!renewal);
  };

  return (
    <>
      {renewal && <RenewalModal handleRenewal={handleRenewal} />}
      <div
        className="my-number-plate-sec d-flex-col  g-20"
        style={{ overflow: `${renewal && "hidden"}` }}
      >
        <h2 className="profile-title  w-100 m-b">{title}</h2>
        <div className="boxes">
          <div className="box d-flex-justify-between">
            <div className="content1 d-flex-col g-10">
              <div className=" pelak g-5">
                <div className="part1 d-flex-col-center">
                  <img src="/profile/border-doted.svg" alt="" />
                  <span className="sub1">EU</span>
                </div>
                <div className="part2 d-flex-justify-center">
                  <h5 className="head5">AP 1344GH</h5>
                </div>
              </div>
              <div className="d-flex-center g-5">
                <img src="/profile/car.svg" alt="" />
                <span>porsche 911 Carrena</span>
              </div>
              <div className="d-flex-center g-5">
                <img src="/profile/note.svg" alt="" />
                <span>124567890</span>
              </div>
              <div className="d-flex-center g-5">
                <img src="/profile/cal.svg" alt="" />
                <span>2022/02/02</span>
              </div>
            </div>
            <div className="content2 d-flex-col g-10">
              <div className="d-flex-center g-10">
                <span className="sub1 edit">
                  <BorderColorIcon />
                </span>
                <span className="sub1 delete">
                  <DeleteIcon />
                </span>
              </div>
              <button
                className="btn-g d-flex-justify-center"
                onClick={() => handleTitle("Number Plate Details")}
              >
                Details
              </button>
            </div>
          </div>
          <div className="box d-flex-justify-between">
            <div className="content1 d-flex-col g-10">
              <div className=" pelak g-5">
                <div className="part1 d-flex-col-center">
                  <img src="/profile/border-doted.svg" alt="" />
                  <span className="sub1">EU</span>
                </div>
                <div className="part2 d-flex-justify-center">
                  <h5 className="head5">AP 1344GH</h5>
                </div>
              </div>
              <div className="d-flex-center g-5">
                <img src="/profile/car.svg" alt="" />
                <span>porsche 911 Carrena</span>
              </div>
              <div className="d-flex-center g-5">
                <img src="/profile/note.svg" alt="" />
                <span>124567890</span>
              </div>
              <div className="d-flex-center g-5">
                <img src="/profile/cal.svg" alt="" />
                <span>2022/02/02</span>
              </div>
            </div>
            <div className="content2 d-flex-col g-10">
              <div className="d-flex-center g-10">
                <span className="sub1 edit">
                  <BorderColorIcon />
                </span>
                <span className="sub1 delete">
                  <DeleteIcon />
                </span>
              </div>
              <button
                className="btn-g d-flex-justify-center"
                onClick={() => handleTitle("Number Plate Details")}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
