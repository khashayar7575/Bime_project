import React from "react";

type ProfileProps = {
  title: String;
};
export const Profile_wallet = ({ title }: ProfileProps) => {
  return (
    <div className="profile-wallet-sec d-flex-col-center g-20">
      <h2 className="profile-title  w-100 m-b">{title}</h2>
      <div className="profile-amount d-flex-col g-20">
        <div className="title">Wallet amount</div>
        <div className="text">$ 50</div>
      </div>
      <form action="" className="profile-amount-form d-flex-col g-20">
        <div className="t1">Enter the amount you want</div>
        <label htmlFor="">Amount</label>
        <input type="text" placeholder="Enter the amount Ex.10 $" />
        <div className="values d-flex-justify-center w-100 g-10">
          <span className="val">10 $</span>
          <span className="val-act">20 $</span>
          <span className="val">50 $</span>
        </div>
        <button className="btn-g m-auto">increase</button>
      </form>
    </div>
  );
};
