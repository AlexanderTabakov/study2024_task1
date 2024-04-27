import React from "react";
import styled from "styled-components";
import { Rate } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  border: 2px solid #f4f4f6;
  border-radius: 21px;
  padding: 38px;
  position: relative;
  height: 346px;
  width: 510px;
`;

const TabHeader = styled.div`
  display: flex;
  justify-content: space-around;
  .image {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
`;

const CustomersSaysTab = () => {
  return (
    <Container>
      <TabHeader>
        <img className={"image"} src="/customerTab/Pic.svg" alt="customer" />

        <div>
          <div>Alexander R.</div>
          <div>
            {" "}
            <p>01 Year With Us</p>{" "}
          </div>
        </div>

        <div>
          <img className={"image"} src="/customerTab/commas.svg" alt="comm" />
        </div>
      </TabHeader>

      <div>
        <p>
          “ Online invoice payment helps companies save time, are faster and
          save maximum effort for the clients and save maximum effort. Online
          invoice payment helps companies save time ”
        </p>
      </div>

      <div>
        <Rate disabled={true} defaultValue={5} />
      </div>
    </Container>
  );
};

export default CustomersSaysTab;
