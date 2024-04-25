import React, { useEffect } from "react";
import useStore from "store";
import { Spin } from "antd";
import Description from "components/Description";
import Features from "components/Features";
import MobileApp from "components/MobileApp";
import TopRestaurantsLayout from "components/TopRestaurantsLayout";
import DishesLayout from "components/DishesLayout";
import CarouselOfCustomersSay from "components/Carousel";

const MainLayout = () => {
  const { getData, loading, hasErrors } = useStore();

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Spin />;
  }

  return (
    <>
      {/*// <DishCard/>*/}
      <Description />
      <Features />
      <MobileApp />
      <TopRestaurantsLayout />
      <DishesLayout />
      <CarouselOfCustomersSay />
    </>
  );
};

export default MainLayout;
