import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-between min-h-screen bg-body">
      <Header />
      <div className="flex flex-1 self-center p-4 h-full w-full max-w-1k">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
