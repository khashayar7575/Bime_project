import React, { useState } from "react";

import { AiFillCheckCircle } from "react-icons/ai";

type LoginProps = {
  handleLogin: () => void;
};

export const LoginModal = ({ handleLogin }: LoginProps) => {
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
          <div className="error-text">Error!</div>
          <div className="error-desc">
            Entered code is not correct, please try again
          </div>
        </div>
      )}
      <div className="login-wrapp">
        <div className="wellcome-part">
          <div className="wellcome-part-content d-flex-col g-20">
            <h2 className="t1">Welcome back to</h2>
            <h2 className="t2">Insurance</h2>
          </div>
        </div>
        <div className="form-part">
          <div className="close" onClick={() => handleLogin()}>
            <img src="/icons/fi-rr-cross.svg" alt="" />
          </div>
          <div className="form-part-content d-flex-col g-20">
            <h2 className="t1">Log In</h2>
            {!code ? (
              <div className="form-inner">
                <h3 className="t2">
                  Enter your phone number in order to recieve verification code
                </h3>
                <div className="form-sec">
                  <form action="" className="d-flex-col g-5">
                    <label htmlFor="phone-num">Phone number</label>
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
                      <span>I agree with terms & conditions</span>
                    </div>
                    <div className="submit">
                      <button
                        className="btn-g d-flex-center"
                        onClick={sendCodeHandler}
                      >
                        Send Code
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
                    <label htmlFor="phone-num">Verification code</label>
                    <div className="verification d-flex-center g-10">
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                    </div>
                    <div className="time">00:12</div>
                    <div className="terms-and-conditions d-flex-center g-5">
                      <span>Didn’t recieve code?</span>
                      <span
                        className="send-again"
                        onClick={() => handleChecked()}
                      >
                        Send again
                      </span>
                    </div>
                    <div className="submit">
                      <button
                        className="btn-g d-flex-center"
                        onClick={loginHandler}
                      >
                        Login
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
