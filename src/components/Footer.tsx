import React from "react";
import { FaBriefcase, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSheetPlastic } from "react-icons/fa6";

import { cv, linkedin, portfolio, twitter } from "../utils/links";

const Footer: React.FC = () => {
  const aStyles = "p-4 text-3xl";
  return (
    <footer className="bg-secondary text-primary">
      <div className="m-auto max-w-2k">
        <div className="flex flex-col gap-5 p-10 text-center">
          <h3 className="text-3xl font-semibold tracking-widest">Chefcito</h3>
          <p className="font-extralight">
            No cualquiera puede convertirse en un gran artista, pero un gran
            artista sí puede provenir de cualquier lugar
          </p>
        </div>
        <div className="flex justify-center sm:gap-3 p-10">
          <a
            target="_blank"
            className={aStyles}
            href={linkedin}
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            className={aStyles}
            href={twitter}
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            target="_blank"
            className={aStyles}
            href={portfolio}
            rel="noopener noreferrer"
          >
            <FaBriefcase />
          </a>
          <a
            target="_blank"
            className={aStyles}
            href={cv}
            rel="noopener noreferrer"
          >
            <FaSheetPlastic />
          </a>
        </div>
        <hr className="border-primary w-full absolute left-0" />
        <div className="p-10">
          <p className="flex items-center justify-center h-20 text-center font-semibold">
            © 2024 Chefcito. Powered by Diego Nacimiento.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
