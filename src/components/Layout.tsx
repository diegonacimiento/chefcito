import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-body">
      <Header />
      <main className="flex flex-1 self-center justify-center sm:p-4 sm:pt-0 h-full w-full max-w-1k">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
