import React from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const InputStyle = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  .input {
    width: 400px;
    height: 80px;
    margin-left: auto;
    margin-right: auto;    
    color: #6c5fbc;
  }

  .btn {
    width: 400px;
    height: 80px;
    background-color: #6c5fbc;
  }
  
  @media (max-width: 720px) {
  {
    height: 200px;
    display: flex;
    padding: 20px;
    align-items: center;
  }
    .input , .btn {
      width: 300px;
      height: 25%;
    }
  }

  span {
  }
  :hover {
    cursor: pointer;
  }
`;

const InputValidate: React.FC = () => (
  <InputStyle>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        name="remember"
        rules={[{ required: true, message: "Please input your Full Name!" }]}
      >
        <Input placeholder={"Full Name"} className={"input"} />
      </Form.Item>

      <Form.Item<FieldType>
        name="username"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder={"Email"} className={"input"} />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder={"Password"} className={"input"} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
        {/*<div className={'btnAndSignIn'}>*/}

        <Button type="primary" htmlType="submit" className={"btn"}>
          SIGN IN
        </Button>
        <div>
          <span>Create A new Account?</span> <span>Sign In</span>
        </div>
        {/*</div>*/}
      </Form.Item>
    </Form>
  </InputStyle>
);
export default InputValidate;
