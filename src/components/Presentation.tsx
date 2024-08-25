import React from "react";
import { Link } from "react-router-dom";

interface IPresentation {
  imageUrl: string;
  imageTitle: string;
  smallTitle: string;
  bigTitle: string;
  description: string;
  category?: number;
}

const Presentation: React.FC<IPresentation> = ({
  imageUrl,
  imageTitle,
  smallTitle,
  bigTitle,
  description,
  category,
}) => {
  return (
    <div className="flex flex-col items-center px-2 rd:flex-row text-secondary">
      <figure className="h-[500px] max-w-96 w-full min-w-64 py-6 sm:p-9 rd:p-12">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={imageTitle}
        />
      </figure>
      <div className="py-6 sm:p-9 rd:p-12">
        <h5 className="text-xs text-gray-500">{smallTitle}</h5>
        <h3 className="text-4xl font-semibold">{bigTitle}</h3>
        <p className="my-2 font-light">{description}</p>
        <Link to={`/products?categories=${category}`}>
          <button
            type="button"
            title="See Presentation"
            className="p-4 my-4 h-16 w-max font-medium text-primary bg-secondary rounded-sm hover:scale-110 hover:bg-primary hover:text-secondary duration-150"
          >
           Ver platillo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Presentation;
