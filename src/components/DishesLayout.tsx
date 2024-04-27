import React from "react";
import useStore from "store";
import DishCard from "ui/DishCard";
import styled from "styled-components";
import { title } from "components/Description";
import { FaLongArrowAltRight } from "react-icons/fa";

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #cbcbcb;

  .viewAll {
    padding-top: 20px;
    position: absolute;
    bottom: -10px;
    right: 5px;
    &:hover {
      cursor: pointer;
      transform: scale(110%);
    }
  }

  .title {
    ${title}
  }
`;

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px;
`;

const DishesLayout = () => {
  const { data } = useStore();

  return (
    <Container>
      <h2 className={"title"}>
        Our Top <span style={{ color: "#6c5fbc" }}>Dishes</span>
      </h2>

      <Layout>
        {data.map((dish: any) => (
          <DishCard
            key={dish.id}
            price={dish.price}
            image={dish.image}
            rating={dish.raiting}
            markedBy={dish.markedBy}
            name={dish.dishName}
            time={dish.time}
          />
        ))}
      </Layout>

      <p className={"viewAll"}>
        View All <FaLongArrowAltRight />{" "}
      </p>
    </Container>
  );
};

export default DishesLayout;
