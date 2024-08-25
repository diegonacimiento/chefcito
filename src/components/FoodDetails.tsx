import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

import { IFoods } from "../types/foods";
import foods from "../data/foods";

const FoodDetails: React.FC = () => {
  // Hooks
  const navigate = useNavigate();
  const { id } = useParams();

  // States
  const food = foods.find((food) => food.id === Number(id)) as IFoods;

  // Functions
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex">
        <button
          type="button"
          title="Back"
          onClick={handleBack}
          className="flex justify-center items-center gap-1 py-3 sm:mx-4 w-max rounded-md text-secondary hover:scale-105 duration-150"
        >
          <IoMdArrowRoundBack />
          Volver
        </button>

        <button
          type="button"
          title="All foods"
          onClick={() => navigate("/foods")}
          className="flex justify-center items-center gap-1 py-3 mx-4 w-max rounded-md text-secondary hover:scale-105 duration-150"
        >
          Todas las comidas
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 py-4 sm:p-4">
        {/* Images */}
        <div className="md:w-1/2">
          <figure>
            <img src={food.image} />
          </figure>
        </div>

        {/* Data */}
        <div className="flex flex-col gap-4 md:w-1/2 text-secondary">
          <h1 className="text-2xl font-bold line-clamp-2">{food.name}</h1>
          <p className="w-30 text-lg font-semibold">$ {food.price}</p>

          <hr />

          <h3 className="text-lg font-medium">Ingredientes:</h3>
          <div className="flex flex-col">
            {food.ingredients.map((ingredient, index) => (
              <p key={index} className={"text-justify px-2"}>
                {index + 1}. {ingredient}
              </p>
            ))}
          </div>

          <hr />

          <h3 className="text-lg font-medium">Instrucciones:</h3>
          <p className={"text-justify px-2"}>{food.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
