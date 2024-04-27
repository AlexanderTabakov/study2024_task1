import React, { useState } from "react";
import { Button, Modal } from "antd";
import InputValidate from "ui/InputValidate";
import styled from "styled-components";
// import Test from "../assets/productAuth.svg";
import Logo from "../assets/Logo.svg";
import GoogleBtn from "../assets/Google Button.svg";
import AppleBtn from "../assets/Apple Button.svg";
import { textTitle, title } from "components/Description";

const Container = styled.aside`
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
  //align-items: center;
  position: relative;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  height: 80vh;
  width: 90vw;
  padding: 0;

  .modal {
    display: flex;
    justify-content: center;
    justify-items: center;
    width: fit-content;
    height: 100%;
  }

  .btn1 {
    background-color: white;
  }
`;

const AuthSide = styled.div`
  display: flex;
  width: 50%;
  //justify-content: center;
  flex-direction: column;
  align-items: center;
  //justify-content: space-around;

  .authTitle {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 35px;
    line-height: 1.25;
    letter-spacing: -0.04em;
    color: #323142;
    text-align: center;
  }

  .logo {
    position: absolute;
    left: 5px;
  }

  .validate {
    display: flex;
    position: absolute;
    bottom: 5px;
  }

  .authByGoolgeAndApple {
    display: flex;
    gap: 10px;
  }

  .signingUpImg {
    :hover {
      cursor: pointer;
      transform: scale(110%);
    }
  }
`;

const ImageSide = styled.div`
  //position: absolute;
  display: flex;
  right: 1px;
  width: 50%;
  height: 100%;
  background-color: #6c5fbc;
  background-image: url(/productAuth.svg);
  background-repeat: no-repeat;
  background-position: center top;
  //background-size: cover;

  @media (max-width: 720px) {
    display: none;
  }

  .image {
    display: block;
    /* height: 100%; */
    width: 30vw;
    object-fit: fill;
    position: absolute;
    margin-right: auto;
    margin-left: auto;
    right: 10%;
  }

  .title {
    ${title};
    color: white;
  }

  .titleText {
    ${textTitle};
    color: white;
  }

  .description {
    position: absolute;
    bottom: 30px;
  }
`;

const Auth: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        style={{ backgroundColor: "#6c5fbc" }}
        className={"btn1"}
        type="primary"
        onClick={showModal}
      >
        Sign In
      </Button>
      <Button
        style={{ backgroundColor: "white", color: "#6c5fbc" }}
        className={"brn2"}
        type="primary"
        onClick={showModal}
      >
        Sign Up
      </Button>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={"modal"}
        open={isModalOpen}
        // open={true}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={"100vw"}
      >
        <Container>
          <AuthSide>
            <Logo className={"logo"} />

            <div>
              <h2 className={"authTitle"}>Sign In To Eatly</h2>
            </div>

            <div className={"authByGoolgeAndApple"}>
              <GoogleBtn className={"signingUpImg"} />
              <AppleBtn className={"signingUpImg"} />
            </div>

            <div>Or</div>

            <div className={"validate"}>
              <InputValidate />
            </div>
          </AuthSide>

          <ImageSide>
            <div className={"description"}>
              <h2 className={"title"}>Find Foods With Love </h2>

              <h3 className={"titleText"}>
                Eatly Is The Food Delivery Dashboard And Having More Than 2K+
                Dishes Including Asian, Chinese, Italians And Many More. Our
                Dashboard Helps You To Manage Orders And Money.
              </h3>
            </div>
          </ImageSide>
        </Container>
      </Modal>
    </>
  );
};

export default Auth;
