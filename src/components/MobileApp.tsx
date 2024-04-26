import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { FaLongArrowAltRight } from "react-icons/fa";

const MobileStyle = styled.section`
  display: flex;
  height: 900px;
  

  width: 100vw;
  .mobile {
    width: 50%;
    background-image: url(/Mobile.svg);
    background-repeat: no-repeat;
    background-position: center;
  }
    
    li{
        list-style: initial;
        font-family: "Inter", sans-serif;
        font-size: 20px;
        line-height: 1.5;
        color: #606060;
        margin-bottom: 50px;
    }
    
    .title{
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 45px;
        text-align: center;
        color: #323142;
        margin-bottom: 50px;
    }

  .description {
    display: flex;
    flex-direction: column;
      justify-content: center;
    align-items: flex-start;
  }
`;

const MobileApp = () => {
  return (
    <MobileStyle>
      <div className={"mobile"}></div>

      <div className={"description"}>
        <h2 className={'title'}>
          Premium <span>Quality</span> For Your Health
        </h2>
        <li>
          Premium quality food is made with ingredients that are packed with
          essential vitamins, minerals.
        </li>
        <li>
          These foods promote overall wellness by support healthy digestion and
          boosting immunity
        </li>

        <Button
          style={{
            backgroundColor: "#6C5FBC",
            display: "flex",
            alignItems: "center",
              justifyContent: "center",
              color: "white",
              width: "186px",
              height: "70px",
          }}
        >
          {" "}
          Download <FaLongArrowAltRight />{" "}
        </Button>
      </div>
    </MobileStyle>
  );
};

export default MobileApp;
