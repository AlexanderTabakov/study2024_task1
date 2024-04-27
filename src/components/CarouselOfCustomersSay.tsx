import React from "react";
import { Carousel } from "antd";
import CustomersSaysTab from "ui/CustomersSaysTab";

const contentStyle: React.CSSProperties = {
  margin: 0,
  padding: "10px",
  textAlign: "center",
  background: "#d6dbe1",
};

const CarouselOfCustomersSay: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div style={{ width: "1200px", paddingTop: "20px", paddingBottom: "20px" }}>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <CustomersSaysTab />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <CustomersSaysTab />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <CustomersSaysTab />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <CustomersSaysTab />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselOfCustomersSay;
