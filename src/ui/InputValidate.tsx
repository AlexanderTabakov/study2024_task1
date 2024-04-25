import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from "styled-components";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const InputStyle = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    .input {
        width: 382px;
        margin-left: auto;
        margin-right: auto;
        height: 75px;
        color: #6C5FBC;

    }    
    
    .btn{
        width: 382px;
        height: 75px;
        background-color: #6C5FBC;
    }
    
    span {
        
    } : hover {
    cursor: pointer;
}
`

const InputValidate: React.FC = () => (

    <InputStyle>



        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >


            <Form.Item<FieldType>

                name="username"
                rules={[{required: true, message: 'Please input your Full Name!'}]}
            >
                <Input placeholder={'Full Name'} className={'input'}/>
            </Form.Item>

            <Form.Item<FieldType>

                name="username"
                rules={[{required: true, message: 'Please input your email!'}]}
            >
                <Input placeholder={'Email'} className={'input'}/>
            </Form.Item>

            <Form.Item<FieldType>

                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password placeholder={'Password'} className={'input'}/>
            </Form.Item>


            <Form.Item wrapperCol={{offset: 0, span: 16}}>

                {/*<div className={'btnAndSignIn'}>*/}

                    <Button type="primary" htmlType="submit" className={'btn'}>
                        SIGN IN
                    </Button>
                    <div><span>Create A new Account?</span> <span>Sign In</span></div>
                {/*</div>*/}

            </Form.Item>

    </Form>
</InputStyle>
)
;

export default InputValidate;
