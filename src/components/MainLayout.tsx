import React, { useEffect, useState } from "react";
import useStore from "store";
import dishCard from "components/DishCard";
import DishCard from "components/DishCard";
import Description from "components/Description";
import Features from "components/Features";
import MobileApp from "components/MobileApp";

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
      </>
  );
};

export default MainLayout;
