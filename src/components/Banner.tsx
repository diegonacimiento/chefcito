import React from "react";

interface IWelcome {
  image: string;
}

const Welcome: React.FC<IWelcome> = ({ image }) => {
  return (
    <section className="w-full py-64 relative">
      <div className="flex flex-col items-center justify-center w-full p-12">
        <img
          className="absolute top-0 z-10 w-full h-full object-cover"
          src={image}
          alt="Food"
        />
      </div>
    </section>
  );
};

export default Welcome;
