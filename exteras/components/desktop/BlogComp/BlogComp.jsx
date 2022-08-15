import React from "react";

export const BlogComp = () => {
  return (
    <div className="blog-comp d-flex-col p-25">
      <div className="image">
        <img className="full-img" src="/blog/blog1.png" alt="" />
      </div>
      <h4 className="title">How to buy cheapest car insurance</h4>
      <div className="desc-one d-flex-justify-between">
        <div className="d-flex-center g-5">
          <img src="/icons/clock.svg" alt="" />
          <span className="date">20 Jan 2022</span>
        </div>
        <div className="d-flex-center g-5">
          <span className="comment-num">2</span>
          <img src="/icons/comments.svg" alt="" />
        </div>
      </div>
      <div className="desc-two d-flex-center"></div>
      <p className="text">
        One of the main concerns of car lovers is the health of the car and its
        protection against various damages But heres the problem…
      </p>
      <div className="btn-g-radius d-flex-justify-center p-15 g-5">
        <span>See More</span> <img src="/icons/see-more-arrow.svg" alt="" />
      </div>
    </div>
  );
};
