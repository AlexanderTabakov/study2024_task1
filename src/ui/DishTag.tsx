import React from "react";
import styled from "styled-components";


interface IDishTagProps {
  image?:string,
  dishName?:string,
  delivery?:string,
  time?:string
}


const Container = styled.div`

    display: flex;
    flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width:345px;
  height:88px;
  border: blue solid;
  border-radius: 7px;
  box-shadow: 0 20px 30px rgba(70, 70, 70, 0.1);
  &:hover {
    transform: scale(110%);
    transition: transform 0.3s ease;
  }
  
  
  
  .img {
    width: 60px;
  }
  
  .time {
    display: flex;
    
  }
`

const DishTag: React.FC<IDishTagProps> = ({image, delivery, time, dishName}) => {
  return (

      <Container>

        <div>
          <img className={'img'} src={image} alt="tag"/>
        </div>
        <div>
          <h3>{dishName}</h3>
            <div>{delivery}</div>
        </div>
        <div className={'time'}> <p>{time}</p></div>


      </Container>
  );
};

export default DishTag;
