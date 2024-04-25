import React from "react";
import styled from "styled-components";

const FeaturesStyle = styled.section`
  display: flex;
  width: 100vw;
  height: 220px;
  align-items: center;
  justify-content: center;

  background-image: url(/BGFeatures.svg);
  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: white solid;
    color: white;
  }
`;

const Features = () => {
  return (
    <FeaturesStyle>
      <div className={"block"}>
        <h2>10K+</h2>
        <div>Satisfied Costumers All Great Over The World</div>
      </div>

      <div className={"block"}>
        <h2>4M</h2>
        <div>Healthy Dishes Solid Including Milk Shakes Smooth</div>
      </div>

      <div className={"block"}>
        <h2>99.99%</h2>
        <div>Reliable Customer Support We Provide Great Experiences</div>
      </div>
    </FeaturesStyle>
  );
};

export default Features;
