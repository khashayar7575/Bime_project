import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { RenewalModal } from "../modal/RenewalModal";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

type ProfileProps = {
  title: String;
  handleTitle: (val: String) => void;
};
export const Number_Plate_Details = ({ handleTitle, title }: ProfileProps) => {
  const [renewal, setRenewal] = useState<boolean>(false);

  const handleRenewal = () => {
    setRenewal(!renewal);
  };

  useEffect(() => {
    if (renewal) {
      document.body.style.overflow = "hidden";
    }
  }, [renewal]);
  return (
    <>
      {renewal && <RenewalModal handleRenewal={handleRenewal} />}
      <div
        className="number-plate-details-sec d-flex-col  g-20"
        style={{ overflow: `${renewal && "hidden"}` }}
      >
        <div className="profile-title d-flex-justify-between  w-100 m-b">
          <h2 className="head3">{title}</h2>
          <div className="btns d-flex-center g-10">
            <button className="btn-g head6 d-flex-justify-center g-5">
              <BorderColorIcon className="icon" />
              edit
            </button>
            <button className="btn-g head6 d-flex-justify-center">
              <DeleteIcon className="icon" />
              delete
            </button>
          </div>
        </div>
        <div className="box-title d-flex-center g-5">
          <div className="before"></div>
          <h4 className="head4">Owner information</h4>
        </div>
        <div className="boxes">
          <div className="box d-flex-justify-between">
            <div className="content1 d-flex-col g-10">
              <div className="d-flex-center g-5">
                <span className="text-body2">Name</span>
              </div>
              <div className="d-flex-center g-5">
                <span className="text-body2">ID number</span>
              </div>
              <div className="d-flex-center g-5">
                <span className="text-body2">Birth date</span>
              </div>
            </div>
            <div className="content1 d-flex-col g-10">
              <div className="d-flex-center g-5">
                <span className="text-body2">Sarah Pitt</span>
              </div>
              <div className="d-flex-center g-5">
                <span className="text-body2">123456789</span>
              </div>
              <div className="d-flex-center g-5">
                <span className="text-body2">10/10/1999 </span>
              </div>
            </div>
          </div>
          <div className="box d-flex-justify-center">
            <div className="content1 d-flex-col-center ">
              <div className=" pelak g-5">
                <div className="part1 d-flex-col-center">
                  <img src="/profile/border-doted.svg" alt="" />
                  <span className="sub1">EU</span>
                </div>
                <div className="part2 d-flex-justify-center">
                  <h5 className="head5">AP 1344GH</h5>
                </div>
              </div>
              <h5 className="head5">porsche 911 Carrena</h5>
            </div>
          </div>
        </div>

        <div className="boxes">
          <div className="d-flex-col g-10">
            <div className="box-title d-flex-center g-5">
              <div className="before"></div>
              <h4 className="head4">Car body insurance</h4>
            </div>
            <div className="box d-flex-justify-between">
              <div className="content1 d-flex-col g-10">
                <div className="d-flex-center g-5">
                  <img src="/profile/elipse.svg" alt="" />
                  <span className="head5">Gold insurance</span>
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
              <div className="content1 d-flex-col g-10">
                <div className="price d-flex-justify-center">$100</div>
              </div>
            </div>
          </div>
          <div className="d-flex-col g-10">
            <div className="box-title d-flex-center g-5">
              <div className="before"></div>
              <h4 className="head4">Third party insurance</h4>
            </div>
            <div className="box d-flex-justify-between">
              <div className="content1 d-flex-col g-10">
                <div className="d-flex-center g-5">
                  <img src="/profile/elipse.svg" alt="" />
                  <span className="head5">Gold insurance</span>
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
              <div className="content1 d-flex-col g-10">
                <div className="price d-flex-justify-center">$100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
