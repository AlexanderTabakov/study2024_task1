import React, { useEffect } from "react";
import useStore from "store";
import { Spin } from "antd";
import Description from "components/Description";
import Features from "components/Features";
import MobileApp from "components/MobileApp";
import TopRestaurantsLayout from "components/TopRestaurantsLayout";
import DishesLayout from "components/DishesLayout";
import CarouselOfCustomersSay from "components/CarouselOfCustomersSay";
import ControlPurchasesLayout from "components/ControlPurchasesLayout";
import Sale from "components/Sale";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 50px 10px 50px;
  min-height: 100vh;
  margin-top: 10px;
`;

const MainLayout = () => {
  const { getData, loading, hasErrors } = useStore();

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Spin />;
  }

  if (hasErrors) {
    return <div>Error!</div>;
  }

  return (
    <Container>
      <Description />
      <Features />
      <MobileApp />
      <TopRestaurantsLayout />
      <DishesLayout />
      <ControlPurchasesLayout />
      <CarouselOfCustomersSay />
      <Sale />
    </Container>
  );
};

export default MainLayout;
