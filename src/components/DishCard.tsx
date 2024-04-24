import React from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";

interface IDishCardProps {
  src?: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 390px;
  width: 225px;
  border: darkblue solid;
  border-radius: 54px;
  flex-direction: column;
  padding: 20px;
  position: relative;

  img {
    width: 185px;
    height: 185px;
    border-radius: 50%;
    border: salmon solid;
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

const DishCard: React.FC<IDishCardProps> = ({ src }) => {
  return (
    <div>
      <Container>
        <FaRegHeart className={"heartIcon"} />

        <img src={src} alt="Image" />

        <Description>
          <div className={"textAndRating"}>
            <div className={"markedBy"}>Healthy</div>
            <p>Chiken Hell</p>
          </div>
          <div className={"rating"}>
            {" "}
            <p>24 min</p> <TiStarFullOutline /> <p>4.8</p>{" "}
          </div>
        </Description>

        <PriceAndAddToCard>
          <div>
            <span>$</span> <span>12.99</span>{" "}
          </div>
          <button>+</button>
        </PriceAndAddToCard>
      </Container>
    </div>
  );
};

export default DishCard;
