import React from "react";

import Search from "../components/Search";
import FoodsList from "../components/FoodsList";

const Foods: React.FC = () => {
  return (
    <div>
      <Search />
      <FoodsList />
    </div>
  );
};

export default Foods;
