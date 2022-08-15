import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type ProfileProps = {
  title: String;
};
export const Profile_transactions = ({ title }: ProfileProps) => {
  return (
    <div className="profile-transactions-sec d-flex-col  g-20">
      <h2 className="profile-title  w-100 m-b">{title}</h2>
      <div className="box d-flex-col g-10">
        <div className="title d-flex-center">
          <span>recents</span>
          <span>
            <ArrowDropDownIcon />
          </span>
        </div>
        <div className="contents">
          <div className="content d-flex-col">
            <div className="decrease">-10 $</div>
            <div className="date d-flex-justify-between">
              <span> 2022/2/2</span>
              <span>Car body insurance</span>
            </div>
          </div>
          <div className="content d-flex-col">
            <div className="increase">+10 $</div>
            <div className="date d-flex-justify-between">
              <span> 2022/2/2</span>
              <span>Car body insurance</span>
            </div>
          </div>
          <div className="content d-flex-col">
            <div className="decrease">-10 $</div>
            <div className="date d-flex-justify-between">
              <span> 2022/2/2</span>
              <span>Car body insurance</span>
            </div>
          </div>
        </div>
      </div>
      <div className="box d-flex-col g-10">
        <div className="title d-flex-center">
          <span>others</span>
          <span>
            <ArrowDropDownIcon />
          </span>
        </div>
        <div className="contents">
          <div className="content d-flex-col">
            <div className="decrease">-10 $</div>
            <div className="date d-flex-justify-between">
              <span> 2022/2/2</span>
              <span>Car body insurance</span>
            </div>
          </div>
          <div className="content d-flex-col">
            <div className="increase">+10 $</div>
            <div className="date d-flex-justify-between">
              <span> 2022/2/2</span>
              <span>Car body insurance</span>
            </div>
          </div>
          <div className="content d-flex-col">
            <div className="decrease">-10 $</div>
            <div className="date d-flex-justify-between">
              <span> 2022/2/2</span>
              <span>Car body insurance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
