import React from "react";
import styled from "styled-components";
import Star from "../assets/star.svg";
import Logo from '../assets/trustpilot.svg'
import Image from '../assets/Hero.svg'




const Container = styled.section`
  display: flex;
  flex-direction: row;
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
`;

const RightContainer = styled.div`
 .image {
   position: relative;
 }
`

const Description = () => {
  return (
    <Container>
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
        <div className={'logoAndRating'}>
          <Logo/>
          <div className={"rating"}>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <span>4900+</span>
          </div>
        </div>
      </LeftContainer>

      <RightContainer>

        <Image/>

      </RightContainer>
    </Container>


  );
};

export default Description;
