import React from "react";
import styled, { css } from "styled-components";
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

  .titleText {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 23px;
    color: #323142;
    margin: 0 0 3px;
  }

  span,
  p {
    font-family: "Manrope", sans-serif;
    font-size: 17px;
    color: #8e97a6;
    margin-right: 30px;
  }

  .green {
    border-radius: 3px;
    padding: 5px;
    background-color: #72e7a1;
    width: fit-content;
    color: #309d5c;
  }

  .red {
    border-radius: 3px;
    padding: 2px;
    background-color: #f7c5ba;
    width: fit-content;
    color: #fb461d;
  }

  .yellow {
    border-radius: 3px;
    padding: 2px;
    background-color: #f7edd0;
    width: fit-content;
    color: #daa41a;
  }
`;

const PriceAndAddToCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: #323142;
  }
  .btn {
    border-radius: 5px;
    background-color: #323142;
    color: white;
    border: none;
    width: 43px;
    height: 39px;
    font-size: 2em;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
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

          <p className={"titleText"}>{name}</p>
        </div>
        <div className={"rating"}>
          <p>{time} min</p> <TiStarFullOutline style={{ color: "gold" }} />{" "}
          <span>{rating}</span>
        </div>
      </Description>

      <PriceAndAddToCard>
        <div>
          <span>$</span> <span>{price}</span>
        </div>
        <button className={"btn"}>+</button>
      </PriceAndAddToCard>
    </Container>
  );
};

export default DishCard;
