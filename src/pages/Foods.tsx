import React from "react";

import FoodsList from "../components/FoodsList";

const Foods: React.FC = () => {
  return (
    <div data-aos="fade-right" className="w-full py-2">
      <FoodsList />
    </div>
  );
};

export default Foods;
