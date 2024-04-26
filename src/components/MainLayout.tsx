import React, { useEffect } from "react";
import useStore from "store";
import { Spin } from "antd";
import Description from "components/Description";
import Features from "components/Features";
import MobileApp from "components/MobileApp";
import TopRestaurantsLayout from "components/TopRestaurantsLayout";
import DishesLayout from "components/DishesLayout";
import CarouselOfCustomersSay from "components/Carousel";
import DishTag from "ui/DishTag";
import ControlPurchasesLayout from "components/ControlPurchasesLayout";
import CustomersSaysTab from "ui/CustomersSaysTab";
import Sale from "components/Sale";

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


      <ControlPurchasesLayout/>

      <Description />
      <Features />
      <MobileApp />
      <TopRestaurantsLayout />
      <DishesLayout />
      <CarouselOfCustomersSay />
        <Sale/>







    </>
  );
};

export default MainLayout;
