import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export interface IRestCardProps {
  image: string;
  rating: number;
  markedBy: string;
  name: string;
  time: number;
}

const RestaurantCard: React.FC<IRestCardProps> = ({
  image,
  rating,
  markedBy,
  name,
  time,
}) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={image} />}
  >
    <div>{markedBy}</div>

    <Meta title={name} description="www.instagram.com" />

    <div>
      <span>{time}min </span> - * <span>{rating}</span>
    </div>
  </Card>
);

export default RestaurantCard;
