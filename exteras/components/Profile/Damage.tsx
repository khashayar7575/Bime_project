import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { RenewalModal } from "../modal/RenewalModal";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

type ProfileProps = {
  title: String;
};
export const Damage = ({ title }: ProfileProps) => {
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
        className="my-damage-sec d-flex-col  g-20"
        style={{ overflow: `${renewal && "hidden"}` }}
      >
        <h2 className="profile-title  w-100 m-b">{title}</h2>
        <div className="boxes">
          <div className="box d-flex-justify-between">
            <div className="content1 d-flex-col g-10">
              <div className="d-flex-center g-5">
                <img className="head-img" src="/profile/elipse.svg" alt="" />
                <span className="head-span">Gold insurance</span>
                <span className="head-after">(car body insurance)</span>
              </div>
              <div className="d-flex-center g-5">
                <img src="/profile/car.svg" alt="" />
                <span>sarah pitt</span>
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
                <span className="sp-1">car number plate :</span>
                <span>124567890</span>
              </div>
              <div className="d-flex-center g-5">
                <span className="sp-1">location :</span>
                <span>USA, California</span>
              </div>
              <div className="d-flex-center g-5">
                <span className="sp-1">status :</span>
                <span>registering</span>
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
              <div className="price d-flex-justify-center">$100</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
