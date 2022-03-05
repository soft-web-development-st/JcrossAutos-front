import React from "react";
import StarRating from "react-star-ratings";
import "./rating.css";
const RatingAverage = (p) => {
  if (p && p.ratings) {
    let ratingsArray = p && p.ratings;
    let total = [];

    let length = ratingsArray.length;
    // console.log("length", length);

    ratingsArray.map((r) => total.push(r.star));

    let totalReduced = total.reduce((p, n) => p + n, 0);
    // console.log("total reduced", totalReduced);

    let highest = length * 5;
    // console.log("highest", highest);

    let result = (totalReduced * 5) / highest;
    // console.log("result", result);

    return (
      <div className="r_r">
        <span>
          <StarRating
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="red"
            starEmptyColor="gray"
            editing={false}
            rating={result}
          />
          ({p.ratings.length})
        </span>
      </div>
    );
  }
};

export default RatingAverage;
