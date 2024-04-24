import React, { useEffect, useState } from "react";
import useStore from "store";
import dishCard from "components/DishCard";
import DishCard from "components/DishCard";

const MainLayout = () => {
  const { getData, data, loading, hasErrors } = useStore();

  useEffect(() => {
    getData();
  }, []);

  return (
      <DishCard/>
  );
};

export default MainLayout;
