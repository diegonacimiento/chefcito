import React from "react";
import Header from "./Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen bg-body">
      <Header />
      <div className="flex self-center p-4 h-full w-full max-w-1k">
      {children}
      </div>
    </main>
  );
};

export default Layout;
