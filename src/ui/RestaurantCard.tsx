import React from "react";
import { Card } from "antd";
import styled, { css } from "styled-components";

const { Meta } = Card;

import { FaStar } from "react-icons/fa";
import {textTitle} from "components/Description";


const Container = styled.div`

  box-shadow: 6px 71px 36px rgba(229, 229, 229, 0.7);
  .card {
    border-radius: 25px;
    margin: 15px;
  }

  .footer {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
    font-family: "Inter", sans-serif;
    color: #8E97A6;
  }

  .markedBy {
    border-radius: 10px;
    color: #d00000;
    padding: 3px;
    width: fit-content;
    background-color: salmon;
  }
  
  .titleText {
    ${textTitle};
    padding-left: 0;
  }

`

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

<Container>
  <Card
      className={'card'}
    hoverable
    style={{ width: 400 }}
    cover={<img alt="example" src={image} />}
  >
    <div className={'markedBy'}>{markedBy}</div>

    <Meta className={'titleText'} title={name} />

    <div className={"footer"}>
      <span>{time}min <FaStar style={{color: '#6c5fbc', width: '20px'}}/>  </span> <span>{rating}</span>
      <img
        className={'bookMarkImg'} src='/Bookmark.svg' alt=""/>
    </div>
  </Card>
</Container>
);

export default RestaurantCard;
