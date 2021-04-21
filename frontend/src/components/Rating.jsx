import React from "react";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import PropTypes from "prop-types";

const Rating = ({ rating, numReviews }) => {
  return (
    <p className="d-flex align-items-end">
      <span>
        {rating >= 1 ? (
          <StarFill className="text-warning" />
        ) : rating >= 0.5 ? (
          <StarHalf className="text-warning" />
        ) : (
          <Star className="text-warning" />
        )}
        {rating >= 2 ? (
          <StarFill className="text-warning" />
        ) : rating >= 1.5 ? (
          <StarHalf className="text-warning" />
        ) : (
          <Star className="text-warning" />
        )}
        {rating >= 3 ? (
          <StarFill className="text-warning" />
        ) : rating >= 2.5 ? (
          <StarHalf className="text-warning" />
        ) : (
          <Star className="text-warning" />
        )}
        {rating >= 4 ? (
          <StarFill className="text-warning" />
        ) : rating >= 3.5 ? (
          <StarHalf className="text-warning" />
        ) : (
          <Star className="text-warning" />
        )}
        {rating >= 5 ? (
          <StarFill className="text-warning" />
        ) : rating >= 4.5 ? (
          <StarHalf className="text-warning" />
        ) : (
          <Star className="text-warning" />
        )}
      </span>
      <small className="text-muted ml-2">
        {numReviews} {numReviews > 1 ? "Reviews" : "Review"}
      </small>
    </p>
  );
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number,
  numReviews: PropTypes.number,
};

Rating.defaultProps = {
  rating: 4.5,
  numReviews: 45,
};
