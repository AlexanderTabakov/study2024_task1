import React from 'react';
import styled from "styled-components";
import {Button} from "antd";
import { FaLongArrowAltRight } from "react-icons/fa";

const MobileStyle = styled.section`
    
    
        
    display: flex;
    height: 900px;
    border: darkblue solid;
    
    width: 100vw;
    .mobile{
        width: 50%;
        background-image: url(/Mobile.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
    
    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    } 
    
`

const MobileApp = () => {
    return (
        <MobileStyle>


            <div className={'mobile'}>
            </div>

            <div className={'description'}>

                <h2>Premium <span>Quality</span> For Your Health</h2>
                <li>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                <li>These foods promote overall wellness by support healthy digestion and boosting immunity</li>

                <Button style={{backgroundColor:'#6C5FBC', display:'flex', alignItems:'center'}}> Download <FaLongArrowAltRight />  </Button>

            </div>


        </MobileStyle>
    );
};

export default MobileApp;
