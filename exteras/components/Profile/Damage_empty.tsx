import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { RenewalModal } from "../modal/RenewalModal";

type ProfileProps = {
  title: String;
};
export const Damage_empty = ({ title }: ProfileProps) => {
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
        <div className="empty-box d-flex-justify-center w-100">
          <div className="empty-wrapper d-flex-col-center g-20">
            <img src="/profile/empty.svg" alt="" />
            <div className="head4">The list is empty</div>
            <div className="sub1 desc">You have no number plates</div>
          </div>
        </div>
      </div>
    </>
  );
};
