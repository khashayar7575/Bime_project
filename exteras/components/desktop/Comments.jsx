import React from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";
import { CommentSlider } from "./CommentSlider";

export const Comments = ({UserCommentsAboutUs,CommentsThatUsersHaveMade}) => {
  return (
    <>
      <div className=" comments-sec d-flex-col-center padding">
        <div className="comments-contents d-flex g-30">
          <div className="comment-content">
            <h3 className="title">{UserCommentsAboutUs}</h3>
            <p className="text">
              {CommentsThatUsersHaveMade}
            </p>
          </div>
          <CommentSlider />
        </div>
      </div>
    </>
  );
};
