import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { RenewalModal } from "../modal/RenewalModal";

type ProfileProps = {
  title: String;
};
export const Purchased_Insurance = ({ title }: ProfileProps) => {
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
        className="my-insurance-sec d-flex-col  g-20"
        style={{ overflow: `${renewal && "hidden"}` }}
      >
        <h2 className="profile-title  w-100 m-b">{title}</h2>
        <div className="boxes">
          <div className="box d-flex-justify-between">
            <div className="content1 d-flex-col g-10">
              <div className="d-flex-center g-5">
                <img className="head-img" src="/profile/elipse.svg" alt="" />
                <span className="head-span">Gold insurance</span>
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
              <div
                className="btn-g d-flex-justify-center"
                onClick={() => setRenewal(!renewal)}
              >
                Renewal
              </div>
              <div className="price d-flex-justify-center">$100</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
