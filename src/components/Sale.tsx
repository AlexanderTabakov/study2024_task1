import React from 'react';
import styled from "styled-components";
import {Button, Input} from "antd";


const Container = styled.section`
display: flex;
    max-width: 1215px;
    height: 280px;
    border-radius: 30px;
    background-image: url(/sale-bg.svg);
    background-repeat: no-repeat;
    
    
`

const InputContainer = styled.div`
    
    position: relative;
    display: flex;
    align-items: center;

    .input {
        width: 440px;
        height:70px;
    }
    
    .btn {
        width: 133px;
        height: 54px;
        position: absolute;
        right: 15px;
        
    }
`

const Sale = () => {
    return (
        <Container>

            <h2>GET 50% OFF</h2>

    <InputContainer>
        <Input className={'input'} placeholder="Enter Your Email"/>
        <Button className={'btn'}>SUBSCRIBE</Button>
    </InputContainer>


        </Container>
    );
};

export default Sale;
