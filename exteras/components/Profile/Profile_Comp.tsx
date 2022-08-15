import React, { useEffect, useState } from "react";
import { Damage } from "./Damage";
import { Damage_empty } from "./Damage_empty";
import { Incomplited_Insurance } from "./Incomplited_Insurance";
import { My_Insurance } from "./My_Insurance";
import { My_Insurance_empty } from "./My_Insurance_empty";
import { My_Number_Plates } from "./My_Number_Plates";
import { My_Number_Plates_empty } from "./My_Number_Plates_empty";
import { Number_Plate_Details } from "./Number_Plate_Details";
import { ProfileSidebar } from "./ProfileSidebar";
import { Profile_profile } from "./Profile_profile";
import { Profile_transactions } from "./Profile_transactions";
import { Profile_wallet } from "./Profile_wallet";
import { Purchased_Insurance } from "./Purchased_Insurance";

export const Profile_Comp = () => {
  const [title, setTitle] = useState<String>("");

  const handleTitle = (val: String) => {
    setTitle(val);
  };
  const switchProfile = () => {
    if (title === "profile") {
      return <Profile_profile title={title} />;
    }
    if (title === "wallet") {
      return <Profile_wallet title={title} />;
    }
    if (title === "Transactions") {
      return <Profile_transactions title={title} />;
    }
    if (title === "My Insurance") {
      return <My_Insurance title={title} />;
    }
    if (title === "My Insurance empty") {
      return <My_Insurance_empty title={title} />;
    }
    if (title === "Purchased Insurance") {
      return <Purchased_Insurance title={title} />;
    }
    if (title === "Incomplited Insurance") {
      return <Incomplited_Insurance title={title} />;
    }
    if (title === "My Number Plates") {
      return <My_Number_Plates handleTitle={handleTitle} title={title} />;
    }
    if (title === "Number Plate Details") {
      return <Number_Plate_Details handleTitle={handleTitle} title={title} />;
    }
    if (title === "My Number Plates Empty") {
      return <My_Number_Plates_empty title={title} />;
    }
    if (title === "Damage") {
      return <Damage title={title} />;
    }
    if (title === "Damage empty") {
      return <Damage_empty title={title} />;
    }
  };

  useEffect(() => {
    handleTitle("profile");
  }, []);

  return (
    <div className="profile-sec padding-2">
      <div className="profile-wrapper ">
        <ProfileSidebar handleTitle={handleTitle} title={title}  />
        <div className="profile-content">{switchProfile()}</div>
      </div>
    </div>
  );
};
