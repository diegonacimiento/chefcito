import React from "react";

const NotFound: React.FC = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col justify-center items-center p-4 h-screen w-full"
    >
      <h2 className="text-5xl text-secondary font-bold">404</h2>
      <h2 className="text-3xl text-secondary font-semibold">
        No se ha encontrado la página
      </h2>
    </div>
  );
};

export default NotFound;
