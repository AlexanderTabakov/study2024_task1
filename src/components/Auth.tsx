import React, { useState } from "react";
import { Button, Modal } from "antd";
import InputValidate from "ui/InputValidate";
import styled from "styled-components";
import Test from "../assets/productAuth.svg";
import Logo from "../assets/Logo.svg";
import GoogleBtn from "../assets/Google Button.svg";
import AppleBtn from "../assets/Apple Button.svg";

const Container = styled.aside`
  display: flex;
  position: relative;
  height: 80vh;
  width: 90vw;

  .modal {
    width: fit-content;
    height: 100%;
  }
`;

const AuthSide = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

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
  position: absolute;
  display: flex;
  right: 1px;
  width: 50%;
  height: 100%;
  background-color: #6c5fbc;
  background-repeat: repeat;

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
      <Button type="primary" onClick={showModal}>
        Sign In
      </Button>
      <Button type="primary" onClick={showModal}>
        Sign Up
      </Button>
      <Modal
        className={"modal"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={"100vw"}
      >
        <Container>
          <AuthSide>
            <Logo className={"logo"} />

            <div>
              <h2>Sign In To Eatly</h2>
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
            <Test className={"image"} />

            <div className={"description"}>
              <h2>Find Foods With Love </h2>

              <h3>
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
