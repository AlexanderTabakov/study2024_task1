import React from "react";
import styled from "styled-components";

interface IDishTagProps {
  image?: string;
  dishName?: string;
  delivery?: string;
  time?: string;
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
  align-items: center;
  width:345px;
  height:88px;
  border-radius: 7px;
  box-shadow: 0 20px 30px rgba(70, 70, 70, 0.1);
  &:hover {
    transform: scale(110%);
    transition: transform 0.3s ease;
  }
  
  
  
  .img {
    width: 60px;
      border-radius: 50%;
  }
  
  .time {
      position: absolute;
      bottom: 5px;
      right: 5px;
    display: flex;
      text-align: right;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 11px;
      color: #acadb9;
  }
    
  }
    
    .titleText {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: #323142;
        margin: 0 0 5px;
    }
    
`;

const DishTag: React.FC<IDishTagProps> = ({
  image,
  delivery,
  time,
  dishName,
}) => {
  return (
    <Container>
      <div>
        <img className={"img"} src={image} alt="tag" />
      </div>
      <div>
        <h3 className={"titleText"}>{dishName}</h3>
        <div className={"deliveryText"}>{delivery}</div>
      </div>
      <div className={"time"}>
        {" "}
        <p>{time}</p>
      </div>
    </Container>
  );
};

export default DishTag;
