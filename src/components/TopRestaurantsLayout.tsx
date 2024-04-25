import React from "react";
import styled from "styled-components";
import RestaurantCard from "ui/RestaurantCard";
import useStore from "store";
import { FaLongArrowAltRight } from "react-icons/fa";

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .resLayout {
    display: flex;
    flex-direction: row;
  }
`;

const TopRestaurantsLayout = () => {
  const { restaraunts } = useStore();

  return (
    <Layout>
      <h2>
        Our Top <span>Restaurants</span>
      </h2>
      <div className={"resLayout"}>
        {restaraunts.map((res: any) => (
          <RestaurantCard
            key={res.id}
            image={res.image}
            rating={res.rating}
            markedBy={res.markedBy}
            name={res.name}
            time={res.time}
          />
        ))}
      </div>
      <p>
        View All <FaLongArrowAltRight />{" "}
      </p>
    </Layout>
  );
};

export default TopRestaurantsLayout;
