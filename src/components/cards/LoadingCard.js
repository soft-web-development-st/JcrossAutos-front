import React from "react";
import { Card, Skeleton } from "antd";
const LoadingCard = ({ count }) => {
  const cards = () => {
    let totalCards = [];
    for (let i = 0; i < count; i++) {
      totalCards.push(
        <Card  className="loading_card" key={i}>
          <Skeleton active></Skeleton>
        </Card>
      );
    }
      return totalCards;
  };
  return <div key={count._id}>{cards()}</div>;
};

export default LoadingCard;
