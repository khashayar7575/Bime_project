import React from "react";
import { Navbar } from "../Navbar";
import Image from "next/image";
import { BlogsSlider } from "./BlogsSlider";

export const Blog = ({Blog}) => {
  return (
    <div className="blog-sec ">
      <div className="sec-title">{Blog}</div>
      <div className="blog-contents">
        <div className="slider-wrapper padding-2">
          <BlogsSlider />
        </div>
      </div>
      <div className="arrows">
        <img src="/icons/left-arrow.svg" alt="" />
        <img src="/icons/right-arrow.svg" alt="" />
      </div>
    </div>
  );
};
