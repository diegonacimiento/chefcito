import React from "react";

import foods from "../data/foods.ts";
import Presentation from "../components/Presentation";
import Banner from "../components/Banner.tsx";
import Carousel from "../components/Carousel.tsx";
import { wafleria, welcomeImage } from "../utils/links";

const Home: React.FC = () => {
  return (
    <div>
      <section>
        {" "}
        <Banner image={welcomeImage} />
      </section>
      <div className="p-2 my-4">
        <section>
          <h2 className="font-bold text-secondary text-4xl p-2">Nuestros principales</h2>
          <Presentation
            bigTitle="Spaghetti Carbonara"
            description="¡Conozca nuestro platillo principal realizado con mucha pasión por la cocina!"
            imageTitle="Spaghetti Carbonara"
            imageUrl={foods[0].image}
            smallTitle="Pastas"
          />

          <Presentation
            bigTitle="Sushi"
            description="¡Conozca nuestro exquisito Sushi con el mejor estilo de Japón!"
            imageTitle="Sushi"
            imageUrl={foods[2].image}
            smallTitle="Arroz"
          />
        </section>

        <section>
          <h2 className="font-bold text-secondary text-4xl p-2">Demás menúes</h2>
          <div className="flex md:justify-between flex-col md:flex-row">
            <div>
              <h3 className="text-center text-secondary text-xl font-light p-2">
                Lunes, miercoles y viernes
              </h3>
              <Carousel foods={foods.slice(0, 5)} />
            </div>
            <div>
              <h3 className="text-center text-secondary text-xl font-light p-2">
                Martes, jueves y sábados
              </h3>
              <Carousel foods={foods.slice(5, foods.length)} />
            </div>
          </div>
        </section>

        <section className="sm:mt-8">
        <h2 className="font-bold text-secondary text-4xl p-2">Conoce nuestra waflería</h2>

          <Banner image={wafleria} />
        </section>
      </div>
    </div>
  );
};

export default Home;
