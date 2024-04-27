import React from "react";
import styled, { css } from "styled-components";
import Star from "../assets/star.svg";
import Logo from "../assets/trustpilot.svg";
import Image from "../assets/Hero.svg";
import { Button } from "antd";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const title = css`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 75px;
  line-height: 1.2;
  letter-spacing: -3px;
  color: #201f1f;
  margin: 0 0 20px;
`;

export const textTitle = css`
  display: inline-block;
  padding-left: 60px;
  position: relative;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 2px;
  color: rgba(32, 31, 31, 0.2);
  margin: 0 0 20px;
`;

const LeftContainer = styled.div`
  width: 568px;
  height: 492px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .logoAndRating {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
  }

  .title {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 75px;
    line-height: 1.2;
    letter-spacing: -3px;
    color: #201f1f;
    margin: 0 0 20px;
  }

  .titleText {
    display: inline-block;
    padding-left: 60px;
    position: relative;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 2px;
    color: rgba(32, 31, 31, 0.2);
    margin: 0 0 20px;
  }

  .bold {
    color: #6c5fbc;
  }

  .titleDescription {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.56;
    color: #676767;
    opacity: 0.7;
    margin: 0 0 55px;
  }
  .btn1 {
    width: 250px;
    height: 60px;
    background-color: #6c5fbc;
    color: white;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 1.2;
    margin: 5px;
  }

  .btn2 {
    width: 250px;
    height: 60px;
    color: #6c5fbc;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 1.2;
    margin: 5px;
  }
`;

const RightContainer = styled.div`
  .image {
    position: relative;
  }
`;

const Description = () => {
  return (
    <Container>
      <LeftContainer>
        <p className={"titleText"}> ---------- OVER 1000 USERS </p>
        <h1 className={"title"}>
          Enjoy Foods All Over The <span className={"bold"}>World</span>
        </h1>
        <p className={"titleDescription"}>
          EatLy help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a $20 bonus.
        </p>
        <div>
          <Button className={"btn1"}>Get Started</Button>
          <Button className={"btn2"}>Go Pro</Button>
        </div>
        <div className={"logoAndRating"}>
          <Logo />
          <div className={"rating"}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <span>4900+</span>
          </div>
        </div>
      </LeftContainer>

      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
};

export default Description;
