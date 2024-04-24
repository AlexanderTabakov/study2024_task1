import React, { useEffect, useState } from "react";
import useStore from "store";
import dishCard from "components/DishCard";
import DishCard from "components/DishCard";
import Description from "components/Description";

const MainLayout = () => {
  const { getData, data, loading, hasErrors } = useStore();

  useEffect(() => {
    getData();
  }, []);

  return (
    // <DishCard/>
    <Description />
  );
};

export default MainLayout;
