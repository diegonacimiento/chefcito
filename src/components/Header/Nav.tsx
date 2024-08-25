import React from "react";
import { Link, useLocation } from "react-router-dom";

interface INav {
  handleDrawer?: () => void;
}

const Nav: React.FC<INav> = ({ handleDrawer }) => {
  const { pathname } = useLocation();
  // const { isAuth } = useVelmarContext();

  const liStyles = handleDrawer
    ? "inline-block border-b border-gray-400 px-4 py-7 w-full text-gray-600 hover:text-secondary hover:border-secondary duration-150 "
    : "text-gray-600 hover:text-secondary duration-150 ";

  const ulStyles = handleDrawer
    ? "flex flex-col pb-20"
    : "flex gap-16 justify-center items-center m-auto h-full max-w-520";

  const navStyles = handleDrawer
    ? "w-full h-full overflow-auto"
    : "w-full h-full overflow-auto hidden rd:block";

  return (
    <nav id="drawer-nav" className={navStyles}>
      <ul className={ulStyles}>
        <li>
          <Link
            className={
              liStyles +
              (pathname === "/" && " text-secondary border-secondary")
            }
            onClick={handleDrawer}
            to="/"
          >
            Inicio
          </Link>
        </li>

        <li>
          <Link
            className={
              liStyles +
              (pathname === "/foods" && " text-secondary border-secondary")
            }
            onClick={handleDrawer}
            to="/foods"
          >
            Comidas
          </Link>
        </li>

        <li>
          <Link
            className={
              liStyles +
              (pathname === "/contact" && " text-secondary border-secondary")
            }
            onClick={handleDrawer}
            to="/contact"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
