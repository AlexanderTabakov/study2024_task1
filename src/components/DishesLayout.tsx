import React from "react";
import useStore from "store";
import DishCard from "ui/DishCard";
import styled from "styled-components";

const Layout = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  :hover {
    cursor: pointer;
    transform: scale(110%);
  }
`;

const DishesLayout = () => {
  const { data } = useStore();

  return (
    <Layout>
      {data.map((dish: any) => (
        <DishCard
          key={dish.id}
          price={dish.price}
          image={dish.image}
          rating={dish.rating}
          markedBy={dish.markedBy}
          name={dish.name}
          time={dish.time}
        />
      ))}
    </Layout>
  );
};

export default DishesLayout;
