import React from 'react';
import styled, {css} from "styled-components";
import {Button, Input} from "antd";
import {title} from "components/Description";


const Container = styled.section`
display: flex;
    position: relative;
    width: 80vw;
    height: 280px;
    border-radius: 30px;
    background-image: url(/sale-bg.svg);
    background-repeat: repeat;
    background-size: auto;
    padding-left: 20px;
    flex-wrap: wrap;
    
    .img {
        position: absolute;
        right: 120px;
        bottom: -85px;
        z-index: 1;
    } 
    
    
}
    
    

    .titleSale {
        font-family: "Poppins", sans-serif;
        text-transform: uppercase;
        font-weight: 800;
        font-size: 70px;
        color: #ffffff;
        
    }

@media (max-width: 1000px) {
    .img {
        display: none;
        
    }
    
    .input {
        width: 50vw;
    }
    
    
`

const TitleAndInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const InputContainer = styled.div`

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;


    .input {
        position: relative;
        width: 440px;
        height: 70px;
        background-color: #6c5fbc;
    }

    .btn {
        width: 133px;
        height: 54px;
        position: absolute;
        right: 20px;
        border-radius: 15px;
        background: #8a79ee;
        border-color: #6c5fbc;;
        color: white;

    }

    @media (max-width: 1000px) {
        

        .input {
            width: 50vw;
        }
        
        .btn {
            width: 15vw;
            font-size: 2vw ;
        }
    }

`

const Sale = () => {
    return (
        <Container>

            <TitleAndInput>

            <h2 className={'titleSale'}>GET 50%</h2>

    <InputContainer>
        <Input className={'input'} placeholder="Enter Your Email"/>
        <Button className={'btn'}>SUBSCRIBE</Button>
    </InputContainer>
        </TitleAndInput>

            <div>
                <img className={'img'} src="/FoodImage.svg" alt="foodImage"/>
            </div>

        </Container>
    );
};

export default Sale;
