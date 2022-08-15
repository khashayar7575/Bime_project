import React, { useState } from "react";
import PaymentIcon from "@mui/icons-material/Payment";

type renewalProps = {
  handleRenewal: () => void;
};

export const RenewalModal = ({ handleRenewal }: renewalProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [code, setCode] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  return (
    <div className="renewal-sec d-flex-justify-center">
      <div className="renewal-wrapp d-flex-col">
        <div className="close" onClick={() => handleRenewal()}>
          <img src="/icons/fi-rr-cross.svg" alt="" />
        </div>
        <div className="contents d-flex-col g-20">
          <h4 className="head4">Renewal insurance</h4>
          <div className=" d-flex-center g-5">
            <div className="insurance-det"></div>
            <span className="sub1">Insurance details</span>
          </div>
          <div className="detail-box d-flex-justify-between">
            <div className="d-flex-col part1">
              <span className="body-text2">Car Name</span>
              <span className="body-text2">Car Model</span>
              <span className="body-text2">Year</span>
              <span className="body-text2">Price</span>
              <span className="body-text2">Insurance period</span>
              <span className="body-text2">Extra coverage</span>
            </div>
            <div className="d-flex-col part2">
              <span className="body-text2">Car Name</span>
              <span className="body-text2">Car Model</span>
              <span className="body-text2">Year</span>
              <span className="body-text2">Price</span>
              <span className="body-text2">Insurance period</span>
              <span className="body-text2">Extra coverage</span>
            </div>
          </div>
          <form className="renewal-form d-flex-col g-10">
            <label htmlFor="discount" className="sub1">
              Discount code
            </label>
            <div className="discount-field d-flex-justify-between">
              <input id="discount" type="text" />
              <button className="sub1">Apply</button>
            </div>
            <div className="pay-from d-flex-justify-between">
              <div className="d-flex-col g-5">
                <div className="d-flex-center g-5">
                  <PaymentIcon />
                  <span className="sub1">Pay from wallet</span>
                </div>
                <div className="d-flex-center g-10">
                  <span className="body-text2">Amount</span>
                  <span className="body-text2 amount-num">10 $</span>
                </div>
              </div>
              <h4 className="pay-num head4">100 $</h4>
            </div>
          </form>
        </div>
        <button className="btn-g d-flex-justify-center m-auto"> Pay</button>
      </div>
    </div>
  );
};
