import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#6c5fbc',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const CarouselOfCustomersSay = () => {

    return(
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )

};

export default CarouselOfCustomersSay;
