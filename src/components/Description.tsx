import React from "react";
import styled from "styled-components";
import star from './assets/star.svg'


const Container = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  width: 568px;
  height: 492px;
  .rating {
    display: flex;
    flex-direction: row;
  }
`;

const Description = () => {
  return (
    <div>
      <LeftContainer>
        <p> ---------- OVER 1000 USERS </p>
        <h1>
          Enjoy Foods All Over The <span>World</span>
        </h1>
        <p>
          EatLy help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a $20 bonus.
        </p>
        <div>
          <button>Get Started</button>
          <button>Go Pro</button>
        </div>
        <div>
          <img src="/src/assets/trustpilot.svg" alt="trustpilot" />
          <div className={"rating"}>
            <img src={star} alt="" />
            {/*<img src={"/src/assets/star.svg"} alt="" />*/}
            <img src="/src/assets/star.svg.png" alt="star" />
            <img src="/src/assets/star.svg" alt="star" />
            <img src="/src/assets/star.svg" alt="star" />
            <img src="/src/assets/star.svg" alt="star" />
            <img src="/src/assets/star.svg" alt="star" />
            <span>4900+</span>
          </div>
        </div>
      </LeftContainer>
    </div>
  );
};

export default Description;
