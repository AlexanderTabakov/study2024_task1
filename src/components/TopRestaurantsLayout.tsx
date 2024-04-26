import React from "react";
import styled, {css} from "styled-components";
import RestaurantCard from "ui/RestaurantCard";
import useStore from "store";
import { FaLongArrowAltRight } from "react-icons/fa";
import {title} from "components/Description";

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
    position: relative;
    
    .title {
        ${title}
    }

  .resLayout {
    display: flex;
    flex-direction: row;
  }

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
`;

const TopRestaurantsLayout = () => {
  const { restaraunts } = useStore();

  return (
    <Layout>
      <h2 className={'title'}>
        Our Top <span style={{color:'#6c5fbc'}}>Restaurants</span>
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
      <p className={'viewAll'}>
        View All <FaLongArrowAltRight />{" "}
      </p>
    </Layout>
  );
};

export default TopRestaurantsLayout;
