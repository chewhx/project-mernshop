import React from "react";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import PropTypes from "prop-types";

const Rating = ({ rating, numReviews }) => {
  return (
    <p className="d-flex align-items-end">
      <span>
        {rating >= 1 ? <StarFill /> : rating >= 0.5 ? <StarHalf /> : <Star />}
        {rating >= 2 ? <StarFill /> : rating >= 1.5 ? <StarHalf /> : <Star />}
        {rating >= 3 ? <StarFill /> : rating >= 2.5 ? <StarHalf /> : <Star />}
        {rating >= 4 ? <StarFill /> : rating >= 3.5 ? <StarHalf /> : <Star />}
        {rating >= 5 ? <StarFill /> : rating >= 4.5 ? <StarHalf /> : <Star />}
      </span>
      <span className="ml-2">
        {numReviews} {numReviews > 1 ? "Reviews" : "Review"}
      </span>
    </p>
  );
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number,
  numReviews: PropTypes.number,
};
