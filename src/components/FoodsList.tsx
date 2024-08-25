import React, { useState } from "react";
import { Link } from "react-router-dom";

import foodsData from "../data/foods";
import Search from "./Search";

const FoodsList: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const foods = search
    ? foodsData.filter((food) => food.name.toLowerCase().includes(search.toLowerCase()))
    : foodsData;

  return (
    <>
      <Search setName={setSearch} />
      <div className="flex justify-center gap-8 p-4 w-full flex-wrap">
        {foods?.map((food) => (
          <Link
            key={food.id}
            to={`/foods/${food.id}`}
            className="max-w-88 w-full"
          >
            <div
              id="card-food"
              className="shadow-lg rounded-lg overflow-hidden text-secondary hover:scale-105 duration-500"
            >
              <img
                src={food.image}
                alt={food.name}
                height={960}
                width={1170}
                className="object-cover w-full h-[500px]"
              />
              <h2 className="p-2 text-lg font-bold line-clamp-1 text-ellipsis overflow-hidden">
                {food.name}
              </h2>
              <h2 className="p-2 text-sm font-semibold">$ {food.price}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FoodsList;
