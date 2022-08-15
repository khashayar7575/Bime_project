import React from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";
import { CommentSlider } from "./CommentSlider";

export const Comments = () => {
  return (
    <>
      <div className=" comments-sec d-flex-col-center padding">
        <div className="comments-contents d-flex g-30">
          <div className="comment-content">
            <h3 className="title">User comments about us</h3>
            <p className="text">
              Comments that users have made about us and their experiences using
              our services.
            </p>
          </div>
          <CommentSlider />
        </div>
      </div>
    </>
  );
};
