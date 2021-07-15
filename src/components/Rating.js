import React from "react";

const Rating = ({ rating, numReviews }) => {
  return (
    <div className="rating">
      <span>
        <i className="fa fa-star">
          <span>{rating} </span>
        </i>
      </span>

      <span style={{ paddingLeft: "0.2rem" }}> {numReviews + "reviews"}</span>
    </div>
  );
};

export default Rating;
