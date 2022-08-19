import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";


type LoginProps = {
  handleLogin: () => void;
  EnteredCode : string
  WelcomeBackTo : string
  Error : string
  Insurance : string
  Login: string
  EnterYourPhoneNumber : string
  phone : string
  termsAndConditions : string
  SendCode : string
  VerificationCode : string
  notRecieveCode : string
  SendAgain : string
};

export const LoginModal = ({SendAgain,notRecieveCode,VerificationCode,SendCode,termsAndConditions,handleLogin ,EnteredCode ,WelcomeBackTo,Error,Insurance,Login,EnterYourPhoneNumber,phone }: LoginProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [code, setCode] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const sendCodeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCode(!code);
  };
  const loginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setError(!error);
  };

  return (
    <div className="login-sec">
      {error && (
        <div className="error-box">
          <div className="error-text">{Error}</div>
          <div className="error-desc">
            {EnteredCode}
          </div>
        </div>
      )}
      <div className="login-wrapp">
        <div className="wellcome-part">
          <div className="wellcome-part-content d-flex-col g-20">
            <h2 className="t1">{WelcomeBackTo}</h2>
            <h2 className="t2">{Insurance}</h2>
          </div>
        </div>
        <div className="form-part">
          <div className="close" onClick={() => handleLogin()}>
            <img src="/icons/fi-rr-cross.svg" alt="" />
          </div>
          <div className="form-part-content d-flex-col g-20">
            <h2 className="t1">{Login}</h2>
            {!code ? (
              <div className="form-inner">
                <h3 className="t2">
                  {EnterYourPhoneNumber}
                </h3>
                <div className="form-sec">
                  <form action="" className="d-flex-col g-5">
                    <label htmlFor="phone-num">{phone}</label>
                    <div className="inputs d-flex-center">
                      <select name="" id="phone-num">
                        <option>+1</option>
                        <option>+98</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Enter Your phone number"
                      />
                    </div>
                    <div className="terms-and-conditions d-flex-center g-5">
                      <span
                        className="checkbox"
                        onClick={() => handleChecked()}
                      >
                        {checked && <AiFillCheckCircle />}
                      </span>
                      <span>{termsAndConditions}</span>
                    </div>
                    <div className="submit">
                      <button
                        className="btn-g d-flex-center"
                        onClick={sendCodeHandler}
                      >
                        {SendCode}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="form-inner">
                <h3 className="t2">Enter the code sent to +123456789</h3>
                <div className="form-sec">
                  <form action="" className="d-flex-col g-5">
                    <label htmlFor="phone-num">{VerificationCode}</label>
                    <div className="verification d-flex-center g-10">
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                    </div>
                    <div className="time">00:12</div>
                    <div className="terms-and-conditions d-flex-center g-5">
                      <span>{notRecieveCode}</span>
                      <span
                        className="send-again"
                        onClick={() => handleChecked()}
                      >
                        {SendAgain}
                      </span>
                    </div>
                    <div className="submit">
                      <button
                        className="btn-g d-flex-center"
                        onClick={loginHandler}
                      >
                        {Login}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
