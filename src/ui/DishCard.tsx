import React, { useState } from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { IRestCardProps } from "ui/RestaurantCard";

interface IDishCardProps extends IRestCardProps {
  price: number;
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 390px;
  width: 225px;
  border-radius: 54px;
  flex-direction: column;
  padding: 20px;
  position: relative;
  box-shadow: 0 20px 30px rgba(70, 70, 70, 0.1);


  &:hover {
    transform: scale(110%);
    transition: transform 0.3s ease;
  }

  img {
    width: 185px;
    height: 185px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  .heartIcon {
    position: absolute;
    top: 15px;
    right: 55px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  .markedBy {
    border: salmon;
    border-radius: 5px;
    background-color: salmon;
    width: 65px;
    padding: 5px;
  }
  .rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  .textAndRating {
    display: flex;
    flex-direction: column;
  }
`;

const PriceAndAddToCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border-radius: 5px;
    background-color: #323142;
    color: white;
    border: none;
    width: 43px;
    height: 39px;
    font-size: 2em;
  }
`;

const DishCard: React.FC<IDishCardProps> = ({
  image,
  price,
  rating,
  markedBy,
  name,
  time,
}) => {
  const [color, setColor] = useState("green");

  const handleColor = (dish: any) => {
    if (markedBy === "Healthy") {
      return "yellow";
    }

    if (markedBy === "Trending") {
      return "red";
    }
    return "green";
  };

  return (
    <Container>
      <FaRegHeart className={"heartIcon"} />

      <img src={image} alt="Image" />

      <Description>
        <div className={"textAndRating"}>
          <div className={handleColor(markedBy)}>{markedBy}</div>
          <p>{name}</p>
        </div>
        <div className={"rating"}>
          {" "}
          <p>{time} min</p> <TiStarFullOutline /> <p>{rating}</p>{" "}
        </div>
      </Description>

      <PriceAndAddToCard>
        <div>
          <span>$</span> <span>{price}</span>{" "}
        </div>
        <button>+</button>
      </PriceAndAddToCard>
    </Container>
  );
};

export default DishCard;
