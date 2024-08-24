import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Drawer from "./Drawer";

const Header: React.FC = () => {
  return (
    <header className="relative flex justify-center items-center shadow-md rd:px-4 h-16 bg-primary">
      <div className="flex justify-between items-center w-full max-w-1k">
        <Drawer />

        <p className="text-2xl text-secondary font-bold antialiased tracking-widest m-auto">
          <Link to="/">Chefcito</Link>
        </p>

        <div className="w-[50px] opacity-0 rd:hidden"></div>

        <Nav />
      </div>
    </header>
  );
};

export default Header;
