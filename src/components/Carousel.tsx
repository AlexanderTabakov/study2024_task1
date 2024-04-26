import React from "react";
import { Carousel } from "antd";
import CustomersSaysTab from "ui/CustomersSaysTab";
import styled from "styled-components";


const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "fit-content",
  background: "#eae5e5",
};

const Container = styled.div`
    
    .carousel{
        
    }
    
    .dots {
        background-color: black;
        height: 20px;
        color: blueviolet;

        li {
            background-color: #ff0000;
        }
    }
`


const CarouselOfCustomersSay: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (


      <Container>


          <h2><span>Customers</span> Say</h2>

    <Carousel className={'carousel'} dots={{className:'dots'}} afterChange={onChange}>


      <div>
        <h3 style={contentStyle}><CustomersSaysTab/> </h3>

      </div>
      <div>
        <h3 style={contentStyle}><CustomersSaysTab/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><CustomersSaysTab/></h3>
      </div>

    </Carousel>

      </Container>
  );
};

export default CarouselOfCustomersSay;
