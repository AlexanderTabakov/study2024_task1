import React from "react";
import styled from "styled-components";

const FeaturesStyle = styled.section`
  display: flex;
  width: 100vw;
  height: 220px;
  align-items: center;
  justify-content: center;
    border-bottom: 1px solid #cbcbcb;

  background-image: url(/BGFeatures.svg);
  .block {
      padding: 0 25px;
      text-align: center;
      border-right: 1px solid #c5c5c5;<p>
  }
    
    .title{
        font-family: "Poppins", sans-serif;
        color: #ffffff;
        font-weight: 700;
        font-size: 43px;
        margin-bottom: 10px;
    }
    .titleText{
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #C5BFED;
        margin: 0;
    }
`;

const Features = () => {
  return (
    <FeaturesStyle>
      <div className={"block"}>
        <h2 className={'title'}>10K+</h2>
        <div><p className={'titleText'}>Satisfied Costumers All Great Over The World</p></div>
      </div>

      <div className={"block"}>
        <h2 className={'title'} >4M</h2>
        <div><p className={'titleText'}>Healthy Dishes Solid Including Milk Shakes Smooth</p></div>
      </div>

      <div className={"block"}>
        <h2 className={'title'}>99.99%</h2>
        <div><p className={'titleText'}>Reliable Customer Support We Provide Great Experiences</p></div>
      </div>
    </FeaturesStyle>
  );
};

export default Features;
