import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type setProps = {
  handleTitle: (val: String) => void;
  title: String;
  handleInsurance?: () => void;
};

export const ProfileSidebar = ({ handleTitle, title }: setProps) => {
  const [subInsurance, setSubInsurance] = useState<boolean>(false);

  const handleInsurance = () => {
    setSubInsurance(!subInsurance);
  };
  return (
    <div className="profile-sider">
      <div className="sider-profile">
        <img src="/profile/profile.svg" alt="" />
        <div className="user-info-sec">
          <span className="user-name">sarah pitt</span>
          <span className="phone">+123456789</span>
        </div>
      </div>
      <div
        className={
          title === "profile"
            ? "profile-item-active d-flex-center g-10"
            : "profile-item d-flex-center g-10"
        }
        onClick={() => handleTitle("profile")}
      >
        <span>
          <PersonOutlineIcon />
        </span>
        <span>profile</span>
      </div>
      <div
        className={
          title === "wallet"
            ? "profile-item-active d-flex-center g-10"
            : "profile-item d-flex-center g-10"
        }
        onClick={() => handleTitle("wallet")}
      >
        <span>
          <AccountBalanceWalletIcon />
        </span>
        <span>Wallet</span>
      </div>
      <div
        className={
          title === "Transactions"
            ? "profile-item-active d-flex-center g-10"
            : "profile-item d-flex-center g-10"
        }
        onClick={() => handleTitle("Transactions")}
      >
        <span>
          <AirlineStopsIcon />
        </span>
        <span>Transactions</span>
      </div>
      <div
        className={
          title === "My Insurances"
            ? "profile-item-active d-flex-center g-10"
            : "profile-item d-flex-center g-10"
        }
        onClick={() => {
          handleTitle("My Insurance");
          handleInsurance();
        }}
      >
        <span>
          <AirlineStopsIcon />
        </span>
        <span>My Insurances</span>
        <span>
          <KeyboardArrowDownIcon />
        </span>
      </div>
      {subInsurance && (
        <>
          <div
            className={
              title === "My Insurances empty"
                ? "profile-subitem-active d-flex-center g-10"
                : "profile-subitem d-flex-center g-10"
            }
            onClick={() => handleTitle("My Insurance empty")}
          >
            <span className="sub2">
              <AirlineStopsIcon className="sub2" />
            </span>
            <span className="sub2">My Insurances empty </span>
          </div>
          <div
            className={
              title === "My Insurances empty"
                ? "profile-subitem-active d-flex-center g-10"
                : "profile-subitem d-flex-center g-10"
            }
            onClick={() => handleTitle("Purchased Insurance")}
          >
            <span className="sub2">
              <AirlineStopsIcon className="sub2" />
            </span>
            <span className="sub2">Purchased Insurance </span>
          </div>
          <div
            className={
              title === "Incomplited Insurance"
                ? "profile-subitem-active d-flex-center g-10"
                : "profile-subitem d-flex-center g-10"
            }
            onClick={() => handleTitle("Incomplited Insurance")}
          >
            <span className="sub2">
              <AirlineStopsIcon className="sub2" />
            </span>
            <span className="sub2">Incomplited Insurance </span>
          </div>
        </>
      )}
      <div
        className={
          title === "My Number Plates"
            ? "profile-item-active d-flex-center g-10"
            : "profile-item d-flex-center g-10"
        }
        onClick={() => handleTitle("My Number Plates")}
      >
        <span>
          <AirlineStopsIcon />
        </span>
        <span>My Number Plates</span>
      </div>
      <div
        className={
          title === "My Number Plates Empty"
            ? "profile-item-active d-flex-center g-10"
            : "profile-item d-flex-center g-10"
        }
        onClick={() => handleTitle("My Number Plates Empty")}
      >
        <span>
          <AirlineStopsIcon />
        </span>
        <span>My Number Plates Empty</span>
      </div>
      <div
        className={
          title === "Damage"
            ? "profile-item-active d-flex-center g-10"
            : "profile-item d-flex-center g-10"
        }
        onClick={() => handleTitle("Damage")}
      >
        <span>
          <AirlineStopsIcon />
        </span>
        <span>Damage</span>
      </div>
      <div
        className={
          title === "Damage empty"
            ? "profile-item-active d-flex-center g-10"
            : "profile-item d-flex-center g-10"
        }
        onClick={() => handleTitle("Damage empty")}
      >
        <span>
          <AirlineStopsIcon />
        </span>
        <span>Damage empty</span>
      </div>
      <div
        className={
          title === "Reminders"
            ? "profile-item-active d-flex-center g-10"
            : "profile-item d-flex-center g-10"
        }
        onClick={() => handleTitle("Reminders")}
      >
        <span>
          <AirlineStopsIcon />
        </span>
        <span>Reminders</span>
      </div>
      <div className="profile-item logout d-flex-center g-10">
        <span>
          <ExitToAppIcon />
        </span>
        <span>Log Out</span>
      </div>
    </div>
  );
};
