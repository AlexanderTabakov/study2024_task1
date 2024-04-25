import React, { useEffect, useState } from "react";
import useStore from "store";
import dishCard from "ui/DishCard";
import DishCard from "ui/DishCard";
import Description from "components/Description";
import Features from "components/Features";
import MobileApp from "components/MobileApp";
import TopRestaurantsLayout from "components/TopRestaurantsLayout";
import RestaurantCard from "ui/RestaurantCard";

const MainLayout = () => {
  const { getData, data, loading, hasErrors } = useStore();

  useEffect(() => {
    getData();
  }, []);

  return (

      <>
    {/*// <DishCard/>*/}
    <Description />
      <Features/>
        <MobileApp/>
        <TopRestaurantsLayout/>

      </>
  );
};

export default MainLayout;
