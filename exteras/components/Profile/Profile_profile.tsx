import React from "react";

type ProfileProps = {
  title: String;
};
export const Profile_profile = ({ title }: ProfileProps) => {
  return (
    <div className="profile-profile-sec ">
      <div className="profile-img d-flex-justify-center w-100 m-b">
        <img src="/profile/profile.svg" alt="" />
      </div>
      <form className="profile-form">
        <div className="profile-form-item">
          <label htmlFor="first-name">First name</label>
          <input id="first-name" type="text" />
        </div>
        <div className="profile-form-item">
          <label htmlFor="last-name">Last name</label>
          <input id="last-name" type="text" />
        </div>
        <div className="profile-form-item">
          <label htmlFor="phone-name">Phone number</label>
          <input id="phone-name" type="text" />
        </div>
        <div className="profile-form-item">
          <label htmlFor="Id-name">Id name</label>
          <input id="Id-name" type="text" />
        </div>
        <div className="profile-form-item">
          <label htmlFor="email-name">Email name</label>
          <input id="email-name" type="text" />
        </div>
        <div className="profile-form-item">
          <label htmlFor="birth-name">Birth date</label>
          <input id="birth-name" type="text" />
        </div>
        <div className="profile-form-item">
          <label htmlFor="job-name">Job</label>
          <input id="job-name" type="text" />
        </div>
        <div className="profile-form-item">
          <label htmlFor="city-name">City</label>
          <select id="city-name" defaultValue="tehran">
            <option value="tehran">tehran</option>
          </select>
        </div>
        <div className="submit-sec"></div>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};
